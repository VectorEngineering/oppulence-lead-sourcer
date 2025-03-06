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
    date: "15 February 2025",
    title: "AI-Powered Lead Scraping Engine",
    version: "v0.0.3",
    documentationUrl: "",
    description: (
      <div>
        <p className="mt-2 text-gray-600">
          Our most significant update yet introduces our core lead generation capabilities, using sophisticated AI algorithms to automatically discover and enrich potential customer leads for your business. This powerful engine forms the foundation of our platform's value proposition: delivering high-quality, targeted leads with minimal effort from your team.
        </p>

        <p className="mt-4 text-gray-600">
          The AI-powered lead scraping engine intelligently crawls multiple data sources to identify prospects matching your criteria, then applies machine learning to enrich these leads with accurate contact information and company details. All of this happens automatically, saving your team countless hours of manual research while providing higher quality leads than traditional methods.
        </p>

        <h2 className="mt-8 text-xl font-semibold">New Features</h2>
        <ul className="mt-4 list-disc space-y-3 ps-6 text-gray-600">
          <li>
            <span className="font-semibold">Ideal Customer Profile Builder</span>: Define your target audience with customizable criteria including industry, company size, location, technologies used, and more than 20 additional filtering options
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">AI-Driven Data Enrichment</span>: Automatically append company information, contact details, and basic firmographics to each lead using our proprietary machine learning algorithms that cross-reference multiple data sources
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Lead Discovery Dashboard</span>: Intuitive interface showing your lead generation progress, sources, and quality metrics in real-time with filtering and sorting capabilities
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">CSV Export & Integration</span>: Export your leads in multiple formats (CSV, Excel) for manual import into popular CRM systems, with detailed field mapping options to match your existing systems
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Email Verification</span>: Advanced verification processes to ensure email addresses are valid and deliverable before outreach, significantly reducing bounce rates and protecting your sender reputation
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Duplicate Detection</span>: Intelligent algorithms to identify and merge duplicate leads across different data sources, ensuring a clean and unified lead database
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Lead Discovery Scheduling</span>: Set up automated lead discovery jobs that run on your preferred schedule, delivering fresh leads directly to your workspace
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    date: "23 January 2025",
    title: "Team Workspaces",
    version: "v0.0.2",
    documentationUrl: "",
    description: (
      <div>
        <p className="mt-2 text-gray-600">
          This release introduces comprehensive team workspace functionality, enabling seamless collaboration for small businesses with multiple team members working on lead generation and sales. Workspaces provide organized environments where teams can collaborate effectively while maintaining data separation between different projects or departments.
        </p>

        <p className="mt-4 text-gray-600">
          Our workspace implementation is specifically designed for small business needs, allowing you to organize lead generation efforts by product line, geographic region, or any other organizational structure that makes sense for your business. The granular permission system ensures team members have appropriate access levels while maintaining security.
        </p>

        <h2 className="mt-8 text-xl font-semibold">New Features</h2>
        <ul className="mt-4 list-disc space-y-3 ps-6 text-gray-600">
          <li>
            <span className="font-semibold">Create & Manage Workspaces</span>: Set up dedicated spaces for different teams, products, or campaigns with customizable settings and branding options
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Team Member Invitations</span>: Add colleagues to your workspace with role-based permissions (Admin, Editor, Viewer) and easily manage access through the user interface
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Workspace Switching</span>: Seamlessly switch between different workspaces you belong to from a convenient dropdown menu in the navigation bar
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Activity Logs</span>: Track all changes and actions performed by team members within each workspace with detailed timestamps and user information
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Resource Sharing</span>: Share configurations, templates, and settings across workspace members to maintain consistency in lead generation efforts
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    date: "15 January 2025",
    title: "User Authentication",
    version: "v0.0.1",
    documentationUrl: "",
    description: (
      <div>
        <p className="mt-2 text-gray-600">
          Our first version introduces a robust, secure authentication system that forms the foundation of our AI-powered lead generation platform. We've implemented industry-standard security practices to ensure your data remains protected while providing a seamless user experience.
        </p>

        <p className="mt-4 text-gray-600">
          This authentication system is designed with small businesses in mind, balancing security with ease of use. You can now create an account, manage your credentials, and maintain secure access to the platform as we build toward our full suite of AI-driven lead sourcing capabilities.
        </p>

        <h2 className="mt-8 text-xl font-semibold">New Features</h2>
        <ul className="mt-4 list-disc space-y-3 ps-6 text-gray-600">
          <li>
            <span className="font-semibold">User Registration & Login</span>: Create your account with email verification and securely access the platform with JWT token-based authentication
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Multi-factor Authentication</span>: Additional security layer for your account with email or authenticator app options
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Password Management</span>: Secure password reset flows, strength requirements, and recovery options to maintain access to your account
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Session Management</span>: Secure token-based authentication with automatic timeout for inactive sessions and the ability to view and revoke active sessions
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
          <li>
            <span className="font-semibold">Profile Customization</span>: Update your name, company information, and communication preferences in your user profile
            <span className="ml-2 text-sm text-gray-500">New feature</span>
          </li>
        </ul>
      </div>
    ),
  },
];

export default updates;
