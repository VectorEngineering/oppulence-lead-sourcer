import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookLogWhereInputSchema } from '../inputTypeSchemas/WebhookLogWhereInputSchema'
import { WebhookLogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WebhookLogOrderByWithAggregationInputSchema'
import { WebhookLogScalarFieldEnumSchema } from '../inputTypeSchemas/WebhookLogScalarFieldEnumSchema'
import { WebhookLogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WebhookLogScalarWhereWithAggregatesInputSchema'

export const WebhookLogGroupByArgsSchema: z.ZodType<Prisma.WebhookLogGroupByArgs> = z.object({
  where: WebhookLogWhereInputSchema.optional(),
  orderBy: z.union([ WebhookLogOrderByWithAggregationInputSchema.array(),WebhookLogOrderByWithAggregationInputSchema ]).optional(),
  by: WebhookLogScalarFieldEnumSchema.array(),
  having: WebhookLogScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WebhookLogGroupByArgsSchema;
