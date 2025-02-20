import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateWithoutParentContractInputSchema } from './ContractCreateWithoutParentContractInputSchema'
import { ContractUncheckedCreateWithoutParentContractInputSchema } from './ContractUncheckedCreateWithoutParentContractInputSchema'
import { ContractCreateOrConnectWithoutParentContractInputSchema } from './ContractCreateOrConnectWithoutParentContractInputSchema'
import { ContractUpsertWithWhereUniqueWithoutParentContractInputSchema } from './ContractUpsertWithWhereUniqueWithoutParentContractInputSchema'
import { ContractCreateManyParentContractInputEnvelopeSchema } from './ContractCreateManyParentContractInputEnvelopeSchema'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'
import { ContractUpdateWithWhereUniqueWithoutParentContractInputSchema } from './ContractUpdateWithWhereUniqueWithoutParentContractInputSchema'
import { ContractUpdateManyWithWhereWithoutParentContractInputSchema } from './ContractUpdateManyWithWhereWithoutParentContractInputSchema'
import { ContractScalarWhereInputSchema } from './ContractScalarWhereInputSchema'

export const ContractUncheckedUpdateManyWithoutParentContractNestedInputSchema: z.ZodType<Prisma.ContractUncheckedUpdateManyWithoutParentContractNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractCreateWithoutParentContractInputSchema),
                    z.lazy(() => ContractCreateWithoutParentContractInputSchema).array(),
                    z.lazy(() => ContractUncheckedCreateWithoutParentContractInputSchema),
                    z.lazy(() => ContractUncheckedCreateWithoutParentContractInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ContractCreateOrConnectWithoutParentContractInputSchema),
                    z.lazy(() => ContractCreateOrConnectWithoutParentContractInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ContractUpsertWithWhereUniqueWithoutParentContractInputSchema),
                    z.lazy(() => ContractUpsertWithWhereUniqueWithoutParentContractInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ContractCreateManyParentContractInputEnvelopeSchema).optional(),
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
                    z.lazy(() => ContractUpdateWithWhereUniqueWithoutParentContractInputSchema),
                    z.lazy(() => ContractUpdateWithWhereUniqueWithoutParentContractInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ContractUpdateManyWithWhereWithoutParentContractInputSchema),
                    z.lazy(() => ContractUpdateManyWithWhereWithoutParentContractInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => ContractScalarWhereInputSchema), z.lazy(() => ContractScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default ContractUncheckedUpdateManyWithoutParentContractNestedInputSchema
