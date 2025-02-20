import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportRecipientCreateManyInputSchema } from '../inputTypeSchemas/ReportRecipientCreateManyInputSchema'

export const ReportRecipientCreateManyArgsSchema: z.ZodType<Prisma.ReportRecipientCreateManyArgs> = z.object({
  data: z.union([ ReportRecipientCreateManyInputSchema,ReportRecipientCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ReportRecipientCreateManyArgsSchema;
