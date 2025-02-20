import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceTemplateScalarWhereInputSchema } from './InvoiceTemplateScalarWhereInputSchema'
import { InvoiceTemplateUpdateManyMutationInputSchema } from './InvoiceTemplateUpdateManyMutationInputSchema'
import { InvoiceTemplateUncheckedUpdateManyWithoutProjectInputSchema } from './InvoiceTemplateUncheckedUpdateManyWithoutProjectInputSchema'

export const InvoiceTemplateUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.InvoiceTemplateUpdateManyWithWhereWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => InvoiceTemplateScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => InvoiceTemplateUpdateManyMutationInputSchema),
                z.lazy(() => InvoiceTemplateUncheckedUpdateManyWithoutProjectInputSchema)
            ])
        })
        .strict()

export default InvoiceTemplateUpdateManyWithWhereWithoutProjectInputSchema
