import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSegmentationHistoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryUpdateManyMutationInputSchema'
import { LeadSegmentationHistoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryUncheckedUpdateManyInputSchema'
import { LeadSegmentationHistoryWhereInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryWhereInputSchema'

export const LeadSegmentationHistoryUpdateManyArgsSchema: z.ZodType<Prisma.LeadSegmentationHistoryUpdateManyArgs> = z.object({
  data: z.union([ LeadSegmentationHistoryUpdateManyMutationInputSchema,LeadSegmentationHistoryUncheckedUpdateManyInputSchema ]),
  where: LeadSegmentationHistoryWhereInputSchema.optional(),
}).strict() ;

export default LeadSegmentationHistoryUpdateManyArgsSchema;
