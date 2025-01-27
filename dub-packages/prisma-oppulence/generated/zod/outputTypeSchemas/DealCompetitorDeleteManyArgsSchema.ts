import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealCompetitorWhereInputSchema } from '../inputTypeSchemas/DealCompetitorWhereInputSchema'

export const DealCompetitorDeleteManyArgsSchema: z.ZodType<Prisma.DealCompetitorDeleteManyArgs> = z.object({
  where: DealCompetitorWhereInputSchema.optional(),
}).strict() ;

export default DealCompetitorDeleteManyArgsSchema;
