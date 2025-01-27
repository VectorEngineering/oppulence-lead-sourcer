import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramWhereInputSchema } from '../inputTypeSchemas/ProgramWhereInputSchema'
import { ProgramOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProgramOrderByWithRelationInputSchema'
import { ProgramWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramWhereUniqueInputSchema'

export const ProgramAggregateArgsSchema: z.ZodType<Prisma.ProgramAggregateArgs> = z.object({
  where: ProgramWhereInputSchema.optional(),
  orderBy: z.union([ ProgramOrderByWithRelationInputSchema.array(),ProgramOrderByWithRelationInputSchema ]).optional(),
  cursor: ProgramWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ProgramAggregateArgsSchema;
