import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadComplianceHistorySelectSchema } from '../inputTypeSchemas/LeadComplianceHistorySelectSchema';
import { LeadComplianceHistoryIncludeSchema } from '../inputTypeSchemas/LeadComplianceHistoryIncludeSchema';

export const LeadComplianceHistoryArgsSchema: z.ZodType<Prisma.LeadComplianceHistoryDefaultArgs> = z.object({
  select: z.lazy(() => LeadComplianceHistorySelectSchema).optional(),
  include: z.lazy(() => LeadComplianceHistoryIncludeSchema).optional(),
}).strict();

export default LeadComplianceHistoryArgsSchema;
