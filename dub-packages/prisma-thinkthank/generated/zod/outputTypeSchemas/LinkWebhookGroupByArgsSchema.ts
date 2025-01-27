import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkWebhookWhereInputSchema } from '../inputTypeSchemas/LinkWebhookWhereInputSchema'
import { LinkWebhookOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LinkWebhookOrderByWithAggregationInputSchema'
import { LinkWebhookScalarFieldEnumSchema } from '../inputTypeSchemas/LinkWebhookScalarFieldEnumSchema'
import { LinkWebhookScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LinkWebhookScalarWhereWithAggregatesInputSchema'

export const LinkWebhookGroupByArgsSchema: z.ZodType<Prisma.LinkWebhookGroupByArgs> = z.object({
  where: LinkWebhookWhereInputSchema.optional(),
  orderBy: z.union([ LinkWebhookOrderByWithAggregationInputSchema.array(),LinkWebhookOrderByWithAggregationInputSchema ]).optional(),
  by: LinkWebhookScalarFieldEnumSchema.array(),
  having: LinkWebhookScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LinkWebhookGroupByArgsSchema;
