import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramInviteWhereInputSchema } from '../inputTypeSchemas/ProgramInviteWhereInputSchema'
import { ProgramInviteOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProgramInviteOrderByWithRelationInputSchema'
import { ProgramInviteWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramInviteWhereUniqueInputSchema'

export const ProgramInviteAggregateArgsSchema: z.ZodType<Prisma.ProgramInviteAggregateArgs> = z.object({
  where: ProgramInviteWhereInputSchema.optional(),
  orderBy: z.union([ ProgramInviteOrderByWithRelationInputSchema.array(),ProgramInviteOrderByWithRelationInputSchema ]).optional(),
  cursor: ProgramInviteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ProgramInviteAggregateArgsSchema;
