import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceCommentUpdateManyMutationInputSchema } from '../inputTypeSchemas/InvoiceCommentUpdateManyMutationInputSchema'
import { InvoiceCommentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/InvoiceCommentUncheckedUpdateManyInputSchema'
import { InvoiceCommentWhereInputSchema } from '../inputTypeSchemas/InvoiceCommentWhereInputSchema'

export const InvoiceCommentUpdateManyArgsSchema: z.ZodType<Prisma.InvoiceCommentUpdateManyArgs> = z.object({
  data: z.union([ InvoiceCommentUpdateManyMutationInputSchema,InvoiceCommentUncheckedUpdateManyInputSchema ]),
  where: InvoiceCommentWhereInputSchema.optional(),
}).strict() ;

export default InvoiceCommentUpdateManyArgsSchema;
