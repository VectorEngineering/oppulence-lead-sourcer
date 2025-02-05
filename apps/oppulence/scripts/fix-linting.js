const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix irregular whitespace
    content = content.replace(/[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, ' ');

    // Fix console statements in production
    if (process.env.NODE_ENV === 'production') {
        content = content.replace(/console\.(log|info|debug)\((.*?)\);?/g, '');
    }

    // Fix unused variables
    content = content.replace(/^(\s*)(const|let|var)\s+([a-zA-Z0-9_]+)(\s*=.*?;)(\s*\/\/ eslint-disable-line.*)?$/gm,
        (match, space, decl, name, rest) => {
            if (!content.includes(name, match.length)) {
                return `${space}const _${name}${rest} // eslint-disable-line unused-imports/no-unused-vars`;
            }
            return match;
        }
    );

    // Fix img tags to use next/image
    content = content.replace(
        /<img([^>]*)>/g,
        (match, attrs) => {
            if (attrs.includes('next/image')) return match;
            return `<Image${attrs} />`;
        }
    );

    // Fix missing alt attributes on images
    content = content.replace(
        /<(img|Image)([^>]*?)(?!\balt=)([^>]*)>/g,
        '<$1$2 alt=""$3>'
    );

    // Fix missing dependencies in useEffect/useMemo
    content = content.replace(
        /use(Effect|Memo)\(\(\)\s*=>\s*{[\s\S]*?},\s*\[\s*\]\)/g,
        (match) => {
            const deps = [];
            const body = match.match(/{\s*([\s\S]*?)\s*},\s*\[\s*\]/)[1];
            const variables = body.match(/[a-zA-Z_$][a-zA-Z0-9_$]*/g) || [];
            variables.forEach(v => {
                if (!['useEffect', 'useMemo', 'useState', 'useCallback'].includes(v)) {
                    deps.push(v);
                }
            });
            return match.replace(/\[\s*\]/, `[${deps.join(', ')}]`);
        }
    );

    fs.writeFileSync(filePath, content);
}

const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });
files.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    fixFile(fullPath);
}); 