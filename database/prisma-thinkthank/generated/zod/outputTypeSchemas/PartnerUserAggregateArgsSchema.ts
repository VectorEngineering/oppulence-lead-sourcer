import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PartnerUserWhereInputSchema } from '../inputTypeSchemas/PartnerUserWhereInputSchema'
import { PartnerUserOrderByWithRelationInputSchema } from '../inputTypeSchemas/PartnerUserOrderByWithRelationInputSchema'
import { PartnerUserWhereUniqueInputSchema } from '../inputTypeSchemas/PartnerUserWhereUniqueInputSchema'

export const PartnerUserAggregateArgsSchema: z.ZodType<Prisma.PartnerUserAggregateArgs> = z.object({
  where: PartnerUserWhereInputSchema.optional(),
  orderBy: z.union([ PartnerUserOrderByWithRelationInputSchema.array(),PartnerUserOrderByWithRelationInputSchema ]).optional(),
  cursor: PartnerUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PartnerUserAggregateArgsSchema;
