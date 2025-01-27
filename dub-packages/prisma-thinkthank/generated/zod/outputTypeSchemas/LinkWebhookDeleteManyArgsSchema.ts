import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkWebhookWhereInputSchema } from '../inputTypeSchemas/LinkWebhookWhereInputSchema'

export const LinkWebhookDeleteManyArgsSchema: z.ZodType<Prisma.LinkWebhookDeleteManyArgs> = z.object({
  where: LinkWebhookWhereInputSchema.optional(),
}).strict() ;

export default LinkWebhookDeleteManyArgsSchema;
