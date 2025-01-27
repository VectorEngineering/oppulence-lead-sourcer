import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookWhereInputSchema } from '../inputTypeSchemas/WebhookWhereInputSchema'
import { WebhookOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WebhookOrderByWithAggregationInputSchema'
import { WebhookScalarFieldEnumSchema } from '../inputTypeSchemas/WebhookScalarFieldEnumSchema'
import { WebhookScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WebhookScalarWhereWithAggregatesInputSchema'

export const WebhookGroupByArgsSchema: z.ZodType<Prisma.WebhookGroupByArgs> = z.object({
  where: WebhookWhereInputSchema.optional(),
  orderBy: z.union([ WebhookOrderByWithAggregationInputSchema.array(),WebhookOrderByWithAggregationInputSchema ]).optional(),
  by: WebhookScalarFieldEnumSchema.array(),
  having: WebhookScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WebhookGroupByArgsSchema;
