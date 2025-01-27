import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceAttachmentWhereInputSchema } from '../inputTypeSchemas/InvoiceAttachmentWhereInputSchema'

export const InvoiceAttachmentDeleteManyArgsSchema: z.ZodType<Prisma.InvoiceAttachmentDeleteManyArgs> = z.object({
  where: InvoiceAttachmentWhereInputSchema.optional(),
}).strict() ;

export default InvoiceAttachmentDeleteManyArgsSchema;
