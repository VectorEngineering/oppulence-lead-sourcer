import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookLogCreateManyInputSchema } from '../inputTypeSchemas/WebhookLogCreateManyInputSchema'

export const WebhookLogCreateManyArgsSchema: z.ZodType<Prisma.WebhookLogCreateManyArgs> = z.object({
  data: z.union([ WebhookLogCreateManyInputSchema,WebhookLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WebhookLogCreateManyArgsSchema;
