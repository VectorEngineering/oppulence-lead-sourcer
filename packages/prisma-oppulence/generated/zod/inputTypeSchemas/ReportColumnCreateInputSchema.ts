import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportCreateNestedOneWithoutColumnsInputSchema } from './ReportCreateNestedOneWithoutColumnsInputSchema';

export const ReportColumnCreateInputSchema: z.ZodType<Prisma.ReportColumnCreateInput> = z.object({
  id: z.string().cuid().optional(),
  field: z.string(),
  label: z.string().optional().nullable(),
  width: z.number().int().optional().nullable(),
  position: z.number().int(),
  isVisible: z.boolean().optional(),
  format: z.string().optional().nullable(),
  report: z.lazy(() => ReportCreateNestedOneWithoutColumnsInputSchema)
}).strict();

export default ReportColumnCreateInputSchema;
