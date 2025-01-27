import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealCompetitorUpdateManyMutationInputSchema } from '../inputTypeSchemas/DealCompetitorUpdateManyMutationInputSchema'
import { DealCompetitorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DealCompetitorUncheckedUpdateManyInputSchema'
import { DealCompetitorWhereInputSchema } from '../inputTypeSchemas/DealCompetitorWhereInputSchema'

export const DealCompetitorUpdateManyArgsSchema: z.ZodType<Prisma.DealCompetitorUpdateManyArgs> = z.object({
  data: z.union([ DealCompetitorUpdateManyMutationInputSchema,DealCompetitorUncheckedUpdateManyInputSchema ]),
  where: DealCompetitorWhereInputSchema.optional(),
}).strict() ;

export default DealCompetitorUpdateManyArgsSchema;
