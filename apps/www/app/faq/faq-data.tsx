import type { FAQItem } from "@/types/faqItems";

export const faqData: FAQItem[] = [
  {
    question: "What is Oppulence and who is it designed for?",
    answer: (
      <div className="space-y-4">
        <p>
          Oppulence is a comprehensive business management platform specifically
          designed for solo entrepreneurs and one-person operations. We
          understand the unique challenges of running a business
          single-handedly, which is why we&apos;ve created an all-in-one
          solution that combines:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Customer Relationship Management (CRM)</li>
          <li>Financial Management Suite</li>
          <li>Contract Management Software</li>
          <li>Lead Sourcing Tools</li>
        </ul>
        <p>
          Our platform empowers solo entrepreneurs to manage their entire
          business operations efficiently, without the need for a large team or
          multiple disconnected tools.
        </p>
      </div>
    ),
    category: "general",
  },
  {
    question: "How does Oppulence's CRM help solo entrepreneurs?",
    answer: (
      <div className="space-y-4">
        <p>
          Our CRM is specifically designed for one-person operations, offering:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Automated Lead Management:</strong> AI-powered lead scoring
            and qualification to help you focus on the most promising
            opportunities
          </li>
          <li>
            <strong>Smart Follow-ups:</strong> Automated reminders and
            engagement sequences to ensure no lead falls through the cracks
          </li>
          <li>
            <strong>Client Timeline:</strong> Complete history of all client
            interactions, documents, and transactions in one place
          </li>
          <li>
            <strong>Mobile Optimization:</strong> Full functionality on mobile
            devices for managing relationships on the go
          </li>
        </ul>
      </div>
    ),
    category: "crm",
  },
  {
    question: "What features are included in the Financial Management Suite?",
    answer: (
      <div className="space-y-4">
        <p>
          Our Financial Management Suite helps solo entrepreneurs maintain
          complete control over their finances with:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Invoicing & Payments:</strong> Professional invoice
            creation, automated payment reminders, and multiple payment gateway
            integrations
          </li>
          <li>
            <strong>Expense Tracking:</strong> Automated expense categorization
            and receipt scanning
          </li>
          <li>
            <strong>Financial Reporting:</strong> Real-time profit & loss
            statements, cash flow forecasting, and tax preparation reports
          </li>
          <li>
            <strong>Budget Management:</strong> Smart budgeting tools with
            AI-powered insights and recommendations
          </li>
        </ul>
      </div>
    ),
    category: "finance",
  },
  {
    question:
      "How does the Contract Management Software streamline business operations?",
    answer: (
      <div className="space-y-4">
        <p>
          Our Contract Management Software simplifies legal and administrative
          tasks:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Template Library:</strong> Access to professionally crafted
            contract templates for various business needs
          </li>
          <li>
            <strong>E-Signatures:</strong> Legally binding electronic signatures
            for quick contract execution
          </li>
          <li>
            <strong>Automated Tracking:</strong> Contract renewal reminders and
            obligation tracking
          </li>
          <li>
            <strong>Version Control:</strong> Complete history of contract
            revisions and negotiations
          </li>
        </ul>
      </div>
    ),
    category: "contracts",
  },
  {
    question: "What makes Oppulence's Lead Sourcing Software unique?",
    answer: (
      <div className="space-y-4">
        <p>
          Our Lead Sourcing Software helps solo entrepreneurs find and qualify
          potential clients:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Multi-Channel Prospecting:</strong> Find leads across social
            media, professional networks, and industry databases
          </li>
          <li>
            <strong>AI-Powered Matching:</strong> Intelligent algorithms
            identify leads that match your ideal customer profile
          </li>
          <li>
            <strong>Automated Outreach:</strong> Personalized outreach campaigns
            with performance tracking
          </li>
          <li>
            <strong>Lead Enrichment:</strong> Automatic enhancement of lead data
            with relevant business information
          </li>
        </ul>
      </div>
    ),
    category: "leads",
  },
  {
    question: "How does Oppulence integrate these different tools?",
    answer: (
      <div className="space-y-4">
        <p>Oppulence provides seamless integration across all its tools:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Leads automatically flow from sourcing to CRM</li>
          <li>
            Contracts link directly to client profiles and financial records
          </li>
          <li>Financial transactions automatically update client histories</li>
          <li>Single dashboard view of all business operations</li>
          <li>Unified search across all tools and records</li>
        </ul>
        <p>
          This integration eliminates the need to switch between different
          systems and ensures all your business data is synchronized and easily
          accessible.
        </p>
      </div>
    ),
    category: "integration",
  },
  {
    question: "How secure is my business data with Oppulence?",
    answer: (
      <div className="space-y-4">
        <p>
          We implement enterprise-grade security measures to protect your
          business data:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>SOC 2 Type II compliant infrastructure</li>
          <li>End-to-end encryption for all data</li>
          <li>GDPR and CCPA compliance</li>
          <li>Regular security audits and penetration testing</li>
          <li>Automated backup and disaster recovery</li>
          <li>Two-factor authentication and role-based access control</li>
        </ul>
      </div>
    ),
    category: "security",
  },
  {
    question: "What kind of support do you offer to solo entrepreneurs?",
    answer: (
      <div className="space-y-4">
        <p>We provide comprehensive support tailored to solo entrepreneurs:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>24/7 Priority Support:</strong> Direct access to our support
            team via chat, email, or phone
          </li>
          <li>
            <strong>Training Resources:</strong> Video tutorials, documentation,
            and best practices guides
          </li>
          <li>
            <strong>Business Templates:</strong> Ready-to-use templates for
            contracts, invoices, and reports
          </li>
          <li>
            <strong>Community Access:</strong> Network with other solo
            entrepreneurs using Oppulence
          </li>
          <li>
            <strong>Regular Webinars:</strong> Training sessions on new features
            and business growth strategies
          </li>
        </ul>
      </div>
    ),
    category: "support",
  },
];
