import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StageDurationUpdateManyMutationInputSchema } from '../inputTypeSchemas/StageDurationUpdateManyMutationInputSchema'
import { StageDurationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/StageDurationUncheckedUpdateManyInputSchema'
import { StageDurationWhereInputSchema } from '../inputTypeSchemas/StageDurationWhereInputSchema'

export const StageDurationUpdateManyArgsSchema: z.ZodType<Prisma.StageDurationUpdateManyArgs> = z.object({
  data: z.union([ StageDurationUpdateManyMutationInputSchema,StageDurationUncheckedUpdateManyInputSchema ]),
  where: StageDurationWhereInputSchema.optional(),
}).strict() ;

export default StageDurationUpdateManyArgsSchema;
