import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceTemplateCreateWithoutProjectInputSchema } from './InvoiceTemplateCreateWithoutProjectInputSchema'
import { InvoiceTemplateUncheckedCreateWithoutProjectInputSchema } from './InvoiceTemplateUncheckedCreateWithoutProjectInputSchema'
import { InvoiceTemplateCreateOrConnectWithoutProjectInputSchema } from './InvoiceTemplateCreateOrConnectWithoutProjectInputSchema'
import { InvoiceTemplateUpsertWithWhereUniqueWithoutProjectInputSchema } from './InvoiceTemplateUpsertWithWhereUniqueWithoutProjectInputSchema'
import { InvoiceTemplateCreateManyProjectInputEnvelopeSchema } from './InvoiceTemplateCreateManyProjectInputEnvelopeSchema'
import { InvoiceTemplateWhereUniqueInputSchema } from './InvoiceTemplateWhereUniqueInputSchema'
import { InvoiceTemplateUpdateWithWhereUniqueWithoutProjectInputSchema } from './InvoiceTemplateUpdateWithWhereUniqueWithoutProjectInputSchema'
import { InvoiceTemplateUpdateManyWithWhereWithoutProjectInputSchema } from './InvoiceTemplateUpdateManyWithWhereWithoutProjectInputSchema'
import { InvoiceTemplateScalarWhereInputSchema } from './InvoiceTemplateScalarWhereInputSchema'

export const InvoiceTemplateUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.InvoiceTemplateUpdateManyWithoutProjectNestedInput> =
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
            upsert: z
                .union([
                    z.lazy(() => InvoiceTemplateUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => InvoiceTemplateUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => InvoiceTemplateCreateManyProjectInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => InvoiceTemplateWhereUniqueInputSchema), z.lazy(() => InvoiceTemplateWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => InvoiceTemplateWhereUniqueInputSchema), z.lazy(() => InvoiceTemplateWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => InvoiceTemplateWhereUniqueInputSchema), z.lazy(() => InvoiceTemplateWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => InvoiceTemplateWhereUniqueInputSchema), z.lazy(() => InvoiceTemplateWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => InvoiceTemplateUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => InvoiceTemplateUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => InvoiceTemplateUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => InvoiceTemplateUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => InvoiceTemplateScalarWhereInputSchema), z.lazy(() => InvoiceTemplateScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default InvoiceTemplateUpdateManyWithoutProjectNestedInputSchema
