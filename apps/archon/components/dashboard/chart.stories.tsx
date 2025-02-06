import type { Meta, StoryObj } from "@storybook/react";

import { Chart } from "./chart";

// Mock data generator
const generateMockData = (days: number, options?: { highErrors?: boolean }) => {
  const data = [];
  const currentDate = new Date();

  for (let i = days; i >= 0; i--) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - i);

    const leads = Math.floor(Math.random() * (options?.highErrors ? 50 : 100));
    const errors = Math.floor(Math.random() * (options?.highErrors ? 80 : 20));

    data.push({
      date: date.toISOString(),
      leads,
      errors,
    });
  }

  return data;
};

const meta: Meta<typeof Chart> = {
  component: Chart,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Router Overview Chart

A responsive line chart component that displays lead and error metrics over time.

## Features
- Interactive toggle between leads and errors view
- Responsive design that adapts to container width
- Tooltip with detailed information on hover
- Accessible data visualization
- Total count summary for each metric

## Usage

\`\`\`tsx
import { Chart } from "@/components/dashboard/chart";

const data = [
  {
    date: "2024-01-01",
    leads: 45,
    errors: 5,
  },
  // ... more data points
];

export default function DashboardPage() {
  return <Chart chartData={data} />;
}
\`\`\`

## Data Format
The component expects data in the following format:
\`\`\`typescript
type DataPoint = {
  date: string;      // ISO date string
  leads: number;     // Number of leads
  errors: number;    // Number of errors
};
\`\`\`

## Accessibility
- Uses semantic HTML elements
- Includes ARIA labels
- Keyboard navigable
- Color contrast compliant
`,
      },
    },
  },
  argTypes: {
    chartData: {
      control: "object",
      description:
        "Array of data points containing date, leads, and errors information",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the chart container",
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-background max-w-4xl p-6">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Chart>;

// Default story with 30 days of data
export const Default: Story = {
  args: {
    chartData: generateMockData(30),
  },
};

// Story showing high error rates
export const HighErrors: Story = {
  args: {
    chartData: generateMockData(30, { highErrors: true }),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the chart's appearance when error rates are unusually high.",
      },
    },
  },
};

// Story with 7 days of data
export const WeekView: Story = {
  args: {
    chartData: generateMockData(7),
  },
  parameters: {
    docs: {
      description: {
        story: "Shows a week's worth of data for more detailed analysis.",
      },
    },
  },
};

// Story with custom styling
export const CustomStyling: Story = {
  args: {
    chartData: generateMockData(30),
    className: "bg-muted rounded-xl shadow-lg",
  },
  parameters: {
    docs: {
      description: {
        story: "Example of the chart with custom styling applied.",
      },
    },
  },
};

// Story showing mobile view
export const Mobile: Story = {
  args: {
    chartData: generateMockData(30),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "Demonstrates the chart's responsive behavior on mobile devices.",
      },
    },
  },
};

// Story with empty state
export const EmptyState: Story = {
  args: {
    chartData: [],
  },
  parameters: {
    docs: {
      description: {
        story: "Shows how the chart handles an empty data set.",
      },
    },
  },
};

// Story with single data point
export const SingleDataPoint: Story = {
  args: {
    chartData: generateMockData(0),
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates how the chart renders with only one data point.",
      },
    },
  },
};
