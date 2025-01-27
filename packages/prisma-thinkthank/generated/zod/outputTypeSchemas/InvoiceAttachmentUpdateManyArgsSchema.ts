import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceAttachmentUpdateManyMutationInputSchema } from '../inputTypeSchemas/InvoiceAttachmentUpdateManyMutationInputSchema'
import { InvoiceAttachmentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/InvoiceAttachmentUncheckedUpdateManyInputSchema'
import { InvoiceAttachmentWhereInputSchema } from '../inputTypeSchemas/InvoiceAttachmentWhereInputSchema'

export const InvoiceAttachmentUpdateManyArgsSchema: z.ZodType<Prisma.InvoiceAttachmentUpdateManyArgs> = z
    .object({
        data: z.union([InvoiceAttachmentUpdateManyMutationInputSchema, InvoiceAttachmentUncheckedUpdateManyInputSchema]),
        where: InvoiceAttachmentWhereInputSchema.optional()
    })
    .strict()

export default InvoiceAttachmentUpdateManyArgsSchema
