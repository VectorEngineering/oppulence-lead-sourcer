import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateWithoutCustomerInputSchema } from './ContractCreateWithoutCustomerInputSchema'
import { ContractUncheckedCreateWithoutCustomerInputSchema } from './ContractUncheckedCreateWithoutCustomerInputSchema'
import { ContractCreateOrConnectWithoutCustomerInputSchema } from './ContractCreateOrConnectWithoutCustomerInputSchema'
import { ContractUpsertWithWhereUniqueWithoutCustomerInputSchema } from './ContractUpsertWithWhereUniqueWithoutCustomerInputSchema'
import { ContractCreateManyCustomerInputEnvelopeSchema } from './ContractCreateManyCustomerInputEnvelopeSchema'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'
import { ContractUpdateWithWhereUniqueWithoutCustomerInputSchema } from './ContractUpdateWithWhereUniqueWithoutCustomerInputSchema'
import { ContractUpdateManyWithWhereWithoutCustomerInputSchema } from './ContractUpdateManyWithWhereWithoutCustomerInputSchema'
import { ContractScalarWhereInputSchema } from './ContractScalarWhereInputSchema'

export const ContractUncheckedUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.ContractUncheckedUpdateManyWithoutCustomerNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractCreateWithoutCustomerInputSchema),
                    z.lazy(() => ContractCreateWithoutCustomerInputSchema).array(),
                    z.lazy(() => ContractUncheckedCreateWithoutCustomerInputSchema),
                    z.lazy(() => ContractUncheckedCreateWithoutCustomerInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ContractCreateOrConnectWithoutCustomerInputSchema),
                    z.lazy(() => ContractCreateOrConnectWithoutCustomerInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ContractUpsertWithWhereUniqueWithoutCustomerInputSchema),
                    z.lazy(() => ContractUpsertWithWhereUniqueWithoutCustomerInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ContractCreateManyCustomerInputEnvelopeSchema).optional(),
            set: z.union([z.lazy(() => ContractWhereUniqueInputSchema), z.lazy(() => ContractWhereUniqueInputSchema).array()]).optional(),
            disconnect: z
                .union([z.lazy(() => ContractWhereUniqueInputSchema), z.lazy(() => ContractWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => ContractWhereUniqueInputSchema), z.lazy(() => ContractWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => ContractWhereUniqueInputSchema), z.lazy(() => ContractWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => ContractUpdateWithWhereUniqueWithoutCustomerInputSchema),
                    z.lazy(() => ContractUpdateWithWhereUniqueWithoutCustomerInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ContractUpdateManyWithWhereWithoutCustomerInputSchema),
                    z.lazy(() => ContractUpdateManyWithWhereWithoutCustomerInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => ContractScalarWhereInputSchema), z.lazy(() => ContractScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default ContractUncheckedUpdateManyWithoutCustomerNestedInputSchema
