import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSegmentationUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadSegmentationUpdateManyMutationInputSchema'
import { LeadSegmentationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadSegmentationUncheckedUpdateManyInputSchema'
import { LeadSegmentationWhereInputSchema } from '../inputTypeSchemas/LeadSegmentationWhereInputSchema'

export const LeadSegmentationUpdateManyArgsSchema: z.ZodType<Prisma.LeadSegmentationUpdateManyArgs> = z.object({
  data: z.union([ LeadSegmentationUpdateManyMutationInputSchema,LeadSegmentationUncheckedUpdateManyInputSchema ]),
  where: LeadSegmentationWhereInputSchema.optional(),
}).strict() ;

export default LeadSegmentationUpdateManyArgsSchema;
