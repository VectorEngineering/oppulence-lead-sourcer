import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"

export const YearInReviewSelectSchema: z.ZodType<Prisma.YearInReviewSelect> = z.object({
  id: z.boolean().optional(),
  year: z.boolean().optional(),
  totalLinks: z.boolean().optional(),
  totalClicks: z.boolean().optional(),
  topLinks: z.boolean().optional(),
  topCountries: z.boolean().optional(),
  workspaceId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  sentAt: z.boolean().optional(),
  workspace: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export default YearInReviewSelectSchema;
