import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCreateWithoutTemplateInputSchema } from './InvoiceCreateWithoutTemplateInputSchema'
import { InvoiceUncheckedCreateWithoutTemplateInputSchema } from './InvoiceUncheckedCreateWithoutTemplateInputSchema'
import { InvoiceCreateOrConnectWithoutTemplateInputSchema } from './InvoiceCreateOrConnectWithoutTemplateInputSchema'
import { InvoiceCreateManyTemplateInputEnvelopeSchema } from './InvoiceCreateManyTemplateInputEnvelopeSchema'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'

export const InvoiceCreateNestedManyWithoutTemplateInputSchema: z.ZodType<Prisma.InvoiceCreateNestedManyWithoutTemplateInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => InvoiceCreateWithoutTemplateInputSchema),
                z.lazy(() => InvoiceCreateWithoutTemplateInputSchema).array(),
                z.lazy(() => InvoiceUncheckedCreateWithoutTemplateInputSchema),
                z.lazy(() => InvoiceUncheckedCreateWithoutTemplateInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InvoiceCreateOrConnectWithoutTemplateInputSchema),
                z.lazy(() => InvoiceCreateOrConnectWithoutTemplateInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => InvoiceCreateManyTemplateInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => InvoiceWhereUniqueInputSchema), z.lazy(() => InvoiceWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default InvoiceCreateNestedManyWithoutTemplateInputSchema
