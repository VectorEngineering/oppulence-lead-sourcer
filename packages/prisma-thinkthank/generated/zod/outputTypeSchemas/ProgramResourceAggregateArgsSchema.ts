import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramResourceWhereInputSchema } from '../inputTypeSchemas/ProgramResourceWhereInputSchema'
import { ProgramResourceOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProgramResourceOrderByWithRelationInputSchema'
import { ProgramResourceWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramResourceWhereUniqueInputSchema'

export const ProgramResourceAggregateArgsSchema: z.ZodType<Prisma.ProgramResourceAggregateArgs> = z.object({
  where: ProgramResourceWhereInputSchema.optional(),
  orderBy: z.union([ ProgramResourceOrderByWithRelationInputSchema.array(),ProgramResourceOrderByWithRelationInputSchema ]).optional(),
  cursor: ProgramResourceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ProgramResourceAggregateArgsSchema;
