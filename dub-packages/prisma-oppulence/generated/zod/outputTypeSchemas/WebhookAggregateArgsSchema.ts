import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookWhereInputSchema } from '../inputTypeSchemas/WebhookWhereInputSchema'
import { WebhookOrderByWithRelationInputSchema } from '../inputTypeSchemas/WebhookOrderByWithRelationInputSchema'
import { WebhookWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookWhereUniqueInputSchema'

export const WebhookAggregateArgsSchema: z.ZodType<Prisma.WebhookAggregateArgs> = z.object({
  where: WebhookWhereInputSchema.optional(),
  orderBy: z.union([ WebhookOrderByWithRelationInputSchema.array(),WebhookOrderByWithRelationInputSchema ]).optional(),
  cursor: WebhookWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WebhookAggregateArgsSchema;
