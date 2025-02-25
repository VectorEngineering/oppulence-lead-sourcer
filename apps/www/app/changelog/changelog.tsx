import type React from "react";

export type ChangelogEntry = {
  date: string;
  title: string;
  description: React.ReactNode;
  version: string;
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  documentationUrl?: string;
};

const updates: ChangelogEntry[] = [
  {
    date: "1 December 2024",
    title: "Custom QR Code Logos for Your Domains",
    version: "v1.1.0",
    documentationUrl: "",
    description: (
      <>
        <p className="mt-2 text-gray-600">
          You can now customize your QR code logos on a per-domain basis. This
          lets you create more personalized QR codes for each of the
          brands/products that you manage.
        </p>

        <h2 className="mt-8 text-xl font-semibold">New Features</h2>
        <ul className="mt-4 list-disc space-y-3 ps-6 text-gray-600">
          <li>
            <span className="font-semibold">Custom QR Code Logos</span>: Upload
            and manage unique QR code logos for each domain
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Domain-Specific Branding</span>:
            Create consistent brand identity across all your QR codes
            <span className="ml-2 text-sm text-gray-500">Enhancement</span>
          </li>
          <li>
            <span className="font-semibold">Bulk QR Code Generation</span>:
            Generate multiple branded QR codes at once
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Improvements</h2>
        <ul className="mt-4 list-disc space-y-3 ps-6 text-gray-600">
          <li>
            <span className="font-semibold">Enhanced QR Code Editor</span>:
            Improved interface for customizing QR codes
            <span className="ml-2 text-sm text-gray-500">Enhancement</span>
          </li>
          <li>
            <span className="font-semibold">Performance Optimization</span>:
            Faster QR code generation and preview
            <span className="ml-2 text-sm text-gray-500">Enhancement</span>
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Learn More</h2>
        <p className="mt-4 text-gray-600">
          Learn more about how to set a custom QR code logo for your custom
          domain in our documentation.
        </p>
      </>
    ),
    screenshot: {
      src: "/images/changelogs/file0.png",
      alt: "Custom QR Code Logos Interface",
      width: 1200,
      height: 675,
    },
  },
  {
    date: "15 November 2024",
    title: "Advanced Analytics Dashboard",
    version: "v1.0.5",
    description: (
      <div className="space-y-6">
        <p className="text-gray-600">
          We&lsquo;ve completely revamped our analytics dashboard to provide
          deeper insights and better visualization of your data. The new
          dashboard includes real-time analytics, custom reports, and advanced
          filtering capabilities.
        </p>

        <div>
          <h2 className="mb-4 text-xl font-semibold">New Features</h2>
          <ul className="list-disc space-y-3 pl-6 text-gray-600">
            <li>
              <span className="font-semibold">Real-time Analytics</span>: Live
              tracking of link performance and engagement
              <span className="ml-2 text-sm text-gray-500">New feature</span>
            </li>
            <li>
              <span className="font-semibold">Custom Reports</span>: Build and
              save your own analytics reports
              <span className="ml-2 text-sm text-gray-500">New feature</span>
            </li>
            <li>
              <span className="font-semibold">Advanced Filters</span>: More
              granular control over your data analysis
              <span className="ml-2 text-sm text-gray-500">Enhancement</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">Improvements</h2>
          <ul className="list-disc space-y-3 pl-6 text-gray-600">
            <li>
              <span className="font-semibold">Dashboard Performance</span>:
              Faster loading times and smoother interactions
              <span className="ml-2 text-sm text-gray-500">Enhancement</span>
            </li>
            <li>
              <span className="font-semibold">Export Options</span>: More
              formats for exporting your analytics data
              <span className="ml-2 text-sm text-gray-500">Enhancement</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">Documentation</h2>
          <p className="text-gray-600">
            Check out our updated{" "}
            <a
              href="/docs/analytics"
              className="text-blue-600 hover:text-blue-800"
            >
              analytics documentation
            </a>{" "}
            to learn more about the new features and how to use them
            effectively.
          </p>
        </div>
      </div>
    ),
    screenshot: {
      src: "/images/changelogs/file1.png",
      alt: "New Analytics Dashboard Interface",
      width: 1200,
      height: 675,
    },
  },
];

export default updates;
