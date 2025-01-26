/* eslint-disable security/detect-non-literal-fs-filename */

import * as fs from "fs";
import * as fsPromise from "fs/promises";
import * as path from "path";

import type { PackageJson } from "pkg-types";

// ------------------------------------------------------------------

/**
 * Function to read and parse the root package.json
 * @param cwd the current working directory
 * @returns the root package.json in the workspace.
 */
export function getRootPackageJson(cwd: string): PackageJson {
  const rootPackageJsonPath = path.resolve(cwd, "package.json");
  const rootPackageJson = JSON.parse(
    fs.readFileSync(rootPackageJsonPath, "utf-8"),
  ) as PackageJson;
  return rootPackageJson;
}

// ------------------------------------------------------------------

/**
 * Function to get all workspace package paths.
 * @param workspaces the workspaces defined in the root package.json.
 * @returns an array of all workspace package paths.
 */
export function getWorkspacePackagePaths(rootDir: string): string[] {
  const packageJsonPath = path.join(rootDir, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const workspaces = Array.isArray(packageJson.workspaces)
    ? packageJson.workspaces
    : packageJson.workspaces?.packages || [];

  const packagePaths: string[] = [];

  workspaces.forEach((workspacePattern: string) => {
    const workspaceDirs = workspacePattern.replace(/\/\*$/, "");
    const absolutePath = path.resolve(rootDir, workspaceDirs);

    try {
      // Check if directory exists before trying to read it
      if (fs.existsSync(absolutePath)) {
        const packages = fs
          .readdirSync(absolutePath)
          .map((dir) => path.join(absolutePath, dir))
          .filter((dir) => fs.statSync(dir).isDirectory())
          .filter((dir) => fs.existsSync(path.join(dir, "package.json")));

        packagePaths.push(...packages);
      } else {
        console.warn(`Warning: Workspace directory not found: ${absolutePath}`);
      }
    } catch (error) {
      console.warn(`Warning: Error processing workspace ${absolutePath}:`, error);
    }
  });

  return packagePaths;
}

// ------------------------------------------------------------------

/**
 * Function to get package names from package.json files
 * @param packagePaths an array of package paths
 * @returns an array of package names
 */
export function getPackageNamesFromPaths(packagePaths: string[]): string[] {
  const packageNames = packagePaths
    .map((pkgPath) => {
      const packageJsonPath = path.join(pkgPath, "package.json");
      const packageJson = JSON.parse(
        fs.readFileSync(packageJsonPath, "utf-8"),
      ) as PackageJson;
      return packageJson.name;
    })
    .filter((name): name is string => !!name); // Filter out undefined names

  return packageNames;
}

// ------------------------------------------------------------------

/**
 * Function to get all workspace package names
 * @param cwd the current working directory
 * @returns an array of all workspace package names
 */
export function getWorkspacePackageNames(cwd: string): string[] {
  const rootPackageJson = getRootPackageJson(cwd);
  if (!rootPackageJson.workspaces) {
    throw new Error("No workspaces defined in the root package.json");
  }

  const workspacePackagePaths = getWorkspacePackagePaths(cwd);
  const packageNames = getPackageNamesFromPaths(workspacePackagePaths);

  return [
    ...packageNames,
    ...(rootPackageJson.name ? [rootPackageJson.name] : []),
  ];
}

// ------------------------------------------------------------------

/**
 * Function to update all package.json files in the workspace
 * @param cwd the current working directory
 * @param update the function to update the package.json
 * @param includeRoot whether to include the root package.json
 */
export async function updateWorkspacePackages(
  rootDir: string,
  updateFn: (packageJson: PackageJson, fullPath: string) => PackageJson,
  includeRoot = false,
): Promise<void> {
  try {
    const packagePaths = getWorkspacePackagePaths(rootDir);

    if (includeRoot) {
      packagePaths.push(rootDir);
    }

    for (const packagePath of packagePaths) {
      const packageJsonPath = path.join(packagePath, "package.json");

      try {
        if (fs.existsSync(packageJsonPath)) {
          const packageJson = JSON.parse(
            fs.readFileSync(packageJsonPath, "utf8"),
          );
          const updatedPackageJson = updateFn(packageJson, packagePath);
          fs.writeFileSync(
            packageJsonPath,
            JSON.stringify(updatedPackageJson, null, 2) + "\n",
          );
        }
      } catch (error) {
        console.warn(`Warning: Error processing ${packageJsonPath}:`, error);
      }
    }
  } catch (error) {
    console.error("Error updating workspace packages:", error);
    throw error;
  }
}

// ------------------------------------------------------------------

/**
 * Function to replace a string in a file
 * @param filePath path to the file
 * @param searchReplace an object with search and replace strings
 * @param ignoredFiles an array of file names to ignore
 */
export async function replaceInFile(
  filePath: string,
  searchReplace: Record<string, string>,
  ignoredFiles: string[] = [],
): Promise<void> {
  if (ignoredFiles.includes(path.basename(filePath))) {
    return;
  }

  try {
    let data = await fsPromise.readFile(filePath, "utf8");

    for (const [search, replace] of Object.entries(searchReplace)) {
      // eslint-disable-next-line security/detect-non-literal-regexp
      const regex = new RegExp(search, "g");
      data = data.replace(regex, replace);
    }

    await fsPromise.writeFile(filePath, data, "utf8");
    console.log(`Successfully updated ${filePath}`);
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

// ------------------------------------------------------------------

/**
 * Function to traverse a directory and call a callback on each file
 * @param directory the directory to traverse
 * @param callback a function to call on each file
 * @param ignoredFolders an array of folder names to ignore
 */
export async function traverseDirectory(
  directory: string,
  callback: (fullPath: string) => Promise<void>,
  ignoredFolders: string[] = [],
): Promise<void> {
  try {
    const files = await fsPromise.readdir(directory);

    for (const file of files) {
      const fullPath = path.join(directory, file);
      const stats = await fsPromise.stat(fullPath);

      if (stats.isDirectory()) {
        if (!ignoredFolders.includes(file)) {
          await traverseDirectory(fullPath, callback, ignoredFolders);
        }
      } else if (stats.isFile()) {
        await callback(fullPath);
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${directory}:`, err);
  }
}

// ------------------------------------------------------------------

/**
 * Function to update the prettier.config.js file
 * @param cwd the current working directory
 * @param newNamespace the new namespace to replace
 */
export async function updateNamespaceInPrettierConfig(
  cwd: string,
  newNamespace: string,
): Promise<void> {
  const filePath = path.join(cwd, "prettier.config.js");

  try {
    const data = await fsPromise.readFile(filePath, "utf8");

    // Extract importOrder array content
    const importOrderStart = data.indexOf("importOrder: [");
    const importOrderEnd = data.indexOf("],", importOrderStart);
    if (importOrderStart === -1 || importOrderEnd === -1) {
      console.error("importOrder array not found in file");
      return;
    }

    const beforeImportOrder = data.substring(0, importOrderStart);
    const importOrderContent = data.substring(
      importOrderStart,
      importOrderEnd + 2,
    ); // Include '],'
    const afterImportOrder = data.substring(importOrderEnd + 2);

    const searchPattern = /'\^@\w+\/\(\.\*\)\$'/g;

    // Replace within importOrder array content
    const updatedImportOrderContent = importOrderContent.replace(
      searchPattern,
      (match) => {
        return match.replace(/@\w+\//, `${newNamespace}/`);
      },
    );

    // Reconstruct the file content
    const updatedData =
      beforeImportOrder + updatedImportOrderContent + afterImportOrder;

    await fsPromise.writeFile(filePath, updatedData, "utf8");
    console.log(`Successfully updated ${filePath}`);
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

/* eslint-enable security/detect-non-literal-fs-filename */
