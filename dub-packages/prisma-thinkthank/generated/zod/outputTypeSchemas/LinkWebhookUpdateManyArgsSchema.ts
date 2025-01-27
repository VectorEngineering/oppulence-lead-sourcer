import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkWebhookUpdateManyMutationInputSchema } from '../inputTypeSchemas/LinkWebhookUpdateManyMutationInputSchema'
import { LinkWebhookUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LinkWebhookUncheckedUpdateManyInputSchema'
import { LinkWebhookWhereInputSchema } from '../inputTypeSchemas/LinkWebhookWhereInputSchema'

export const LinkWebhookUpdateManyArgsSchema: z.ZodType<Prisma.LinkWebhookUpdateManyArgs> = z.object({
  data: z.union([ LinkWebhookUpdateManyMutationInputSchema,LinkWebhookUncheckedUpdateManyInputSchema ]),
  where: LinkWebhookWhereInputSchema.optional(),
}).strict() ;

export default LinkWebhookUpdateManyArgsSchema;
