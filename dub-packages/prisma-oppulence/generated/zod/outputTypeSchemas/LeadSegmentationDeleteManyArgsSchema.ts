import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSegmentationWhereInputSchema } from '../inputTypeSchemas/LeadSegmentationWhereInputSchema'

export const LeadSegmentationDeleteManyArgsSchema: z.ZodType<Prisma.LeadSegmentationDeleteManyArgs> = z.object({
  where: LeadSegmentationWhereInputSchema.optional(),
}).strict() ;

export default LeadSegmentationDeleteManyArgsSchema;
