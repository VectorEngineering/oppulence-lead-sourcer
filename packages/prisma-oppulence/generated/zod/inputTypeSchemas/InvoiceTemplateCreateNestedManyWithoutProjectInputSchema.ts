import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceTemplateCreateWithoutProjectInputSchema } from './InvoiceTemplateCreateWithoutProjectInputSchema'
import { InvoiceTemplateUncheckedCreateWithoutProjectInputSchema } from './InvoiceTemplateUncheckedCreateWithoutProjectInputSchema'
import { InvoiceTemplateCreateOrConnectWithoutProjectInputSchema } from './InvoiceTemplateCreateOrConnectWithoutProjectInputSchema'
import { InvoiceTemplateCreateManyProjectInputEnvelopeSchema } from './InvoiceTemplateCreateManyProjectInputEnvelopeSchema'
import { InvoiceTemplateWhereUniqueInputSchema } from './InvoiceTemplateWhereUniqueInputSchema'

export const InvoiceTemplateCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.InvoiceTemplateCreateNestedManyWithoutProjectInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InvoiceTemplateCreateWithoutProjectInputSchema),
                    z.lazy(() => InvoiceTemplateCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => InvoiceTemplateUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => InvoiceTemplateUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => InvoiceTemplateCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => InvoiceTemplateCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => InvoiceTemplateCreateManyProjectInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => InvoiceTemplateWhereUniqueInputSchema), z.lazy(() => InvoiceTemplateWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default InvoiceTemplateCreateNestedManyWithoutProjectInputSchema
