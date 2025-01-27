import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionEnrichmentCreateWithoutProjectInputSchema } from './TransactionEnrichmentCreateWithoutProjectInputSchema'
import { TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema } from './TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema'
import { TransactionEnrichmentCreateOrConnectWithoutProjectInputSchema } from './TransactionEnrichmentCreateOrConnectWithoutProjectInputSchema'
import { TransactionEnrichmentUpsertWithWhereUniqueWithoutProjectInputSchema } from './TransactionEnrichmentUpsertWithWhereUniqueWithoutProjectInputSchema'
import { TransactionEnrichmentCreateManyProjectInputEnvelopeSchema } from './TransactionEnrichmentCreateManyProjectInputEnvelopeSchema'
import { TransactionEnrichmentWhereUniqueInputSchema } from './TransactionEnrichmentWhereUniqueInputSchema'
import { TransactionEnrichmentUpdateWithWhereUniqueWithoutProjectInputSchema } from './TransactionEnrichmentUpdateWithWhereUniqueWithoutProjectInputSchema'
import { TransactionEnrichmentUpdateManyWithWhereWithoutProjectInputSchema } from './TransactionEnrichmentUpdateManyWithWhereWithoutProjectInputSchema'
import { TransactionEnrichmentScalarWhereInputSchema } from './TransactionEnrichmentScalarWhereInputSchema'

export const TransactionEnrichmentUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.TransactionEnrichmentUncheckedUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionEnrichmentCreateWithoutProjectInputSchema),
                    z.lazy(() => TransactionEnrichmentCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => TransactionEnrichmentUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => TransactionEnrichmentCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => TransactionEnrichmentCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => TransactionEnrichmentUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => TransactionEnrichmentUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => TransactionEnrichmentCreateManyProjectInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema),
                    z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema),
                    z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema),
                    z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema),
                    z.lazy(() => TransactionEnrichmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => TransactionEnrichmentUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => TransactionEnrichmentUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => TransactionEnrichmentUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => TransactionEnrichmentUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => TransactionEnrichmentScalarWhereInputSchema),
                    z.lazy(() => TransactionEnrichmentScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default TransactionEnrichmentUncheckedUpdateManyWithoutProjectNestedInputSchema
