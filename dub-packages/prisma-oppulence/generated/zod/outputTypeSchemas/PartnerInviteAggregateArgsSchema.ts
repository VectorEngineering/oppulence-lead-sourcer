import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PartnerInviteWhereInputSchema } from '../inputTypeSchemas/PartnerInviteWhereInputSchema'
import { PartnerInviteOrderByWithRelationInputSchema } from '../inputTypeSchemas/PartnerInviteOrderByWithRelationInputSchema'
import { PartnerInviteWhereUniqueInputSchema } from '../inputTypeSchemas/PartnerInviteWhereUniqueInputSchema'

export const PartnerInviteAggregateArgsSchema: z.ZodType<Prisma.PartnerInviteAggregateArgs> = z.object({
  where: PartnerInviteWhereInputSchema.optional(),
  orderBy: z.union([ PartnerInviteOrderByWithRelationInputSchema.array(),PartnerInviteOrderByWithRelationInputSchema ]).optional(),
  cursor: PartnerInviteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PartnerInviteAggregateArgsSchema;
