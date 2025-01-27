import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookWhereInputSchema } from '../inputTypeSchemas/WebhookWhereInputSchema'

export const WebhookDeleteManyArgsSchema: z.ZodType<Prisma.WebhookDeleteManyArgs> = z.object({
  where: WebhookWhereInputSchema.optional(),
}).strict() ;

export default WebhookDeleteManyArgsSchema;
