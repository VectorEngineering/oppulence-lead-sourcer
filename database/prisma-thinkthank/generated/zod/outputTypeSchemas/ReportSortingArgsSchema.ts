import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportSortingSelectSchema } from '../inputTypeSchemas/ReportSortingSelectSchema';
import { ReportSortingIncludeSchema } from '../inputTypeSchemas/ReportSortingIncludeSchema';

export const ReportSortingArgsSchema: z.ZodType<Prisma.ReportSortingDefaultArgs> = z.object({
  select: z.lazy(() => ReportSortingSelectSchema).optional(),
  include: z.lazy(() => ReportSortingIncludeSchema).optional(),
}).strict();

export default ReportSortingArgsSchema;
