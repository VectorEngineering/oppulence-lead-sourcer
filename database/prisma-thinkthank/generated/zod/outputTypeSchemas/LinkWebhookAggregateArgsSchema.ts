import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkWebhookWhereInputSchema } from '../inputTypeSchemas/LinkWebhookWhereInputSchema'
import { LinkWebhookOrderByWithRelationInputSchema } from '../inputTypeSchemas/LinkWebhookOrderByWithRelationInputSchema'
import { LinkWebhookWhereUniqueInputSchema } from '../inputTypeSchemas/LinkWebhookWhereUniqueInputSchema'

export const LinkWebhookAggregateArgsSchema: z.ZodType<Prisma.LinkWebhookAggregateArgs> = z.object({
  where: LinkWebhookWhereInputSchema.optional(),
  orderBy: z.union([ LinkWebhookOrderByWithRelationInputSchema.array(),LinkWebhookOrderByWithRelationInputSchema ]).optional(),
  cursor: LinkWebhookWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LinkWebhookAggregateArgsSchema;
