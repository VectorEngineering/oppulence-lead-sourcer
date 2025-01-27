import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractEventCreateWithoutContractInputSchema } from './ContractEventCreateWithoutContractInputSchema'
import { ContractEventUncheckedCreateWithoutContractInputSchema } from './ContractEventUncheckedCreateWithoutContractInputSchema'
import { ContractEventCreateOrConnectWithoutContractInputSchema } from './ContractEventCreateOrConnectWithoutContractInputSchema'
import { ContractEventUpsertWithWhereUniqueWithoutContractInputSchema } from './ContractEventUpsertWithWhereUniqueWithoutContractInputSchema'
import { ContractEventCreateManyContractInputEnvelopeSchema } from './ContractEventCreateManyContractInputEnvelopeSchema'
import { ContractEventWhereUniqueInputSchema } from './ContractEventWhereUniqueInputSchema'
import { ContractEventUpdateWithWhereUniqueWithoutContractInputSchema } from './ContractEventUpdateWithWhereUniqueWithoutContractInputSchema'
import { ContractEventUpdateManyWithWhereWithoutContractInputSchema } from './ContractEventUpdateManyWithWhereWithoutContractInputSchema'
import { ContractEventScalarWhereInputSchema } from './ContractEventScalarWhereInputSchema'

export const ContractEventUncheckedUpdateManyWithoutContractNestedInputSchema: z.ZodType<Prisma.ContractEventUncheckedUpdateManyWithoutContractNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractEventCreateWithoutContractInputSchema),
                    z.lazy(() => ContractEventCreateWithoutContractInputSchema).array(),
                    z.lazy(() => ContractEventUncheckedCreateWithoutContractInputSchema),
                    z.lazy(() => ContractEventUncheckedCreateWithoutContractInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ContractEventCreateOrConnectWithoutContractInputSchema),
                    z.lazy(() => ContractEventCreateOrConnectWithoutContractInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ContractEventUpsertWithWhereUniqueWithoutContractInputSchema),
                    z.lazy(() => ContractEventUpsertWithWhereUniqueWithoutContractInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ContractEventCreateManyContractInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => ContractEventWhereUniqueInputSchema), z.lazy(() => ContractEventWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => ContractEventWhereUniqueInputSchema), z.lazy(() => ContractEventWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => ContractEventWhereUniqueInputSchema), z.lazy(() => ContractEventWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => ContractEventWhereUniqueInputSchema), z.lazy(() => ContractEventWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => ContractEventUpdateWithWhereUniqueWithoutContractInputSchema),
                    z.lazy(() => ContractEventUpdateWithWhereUniqueWithoutContractInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ContractEventUpdateManyWithWhereWithoutContractInputSchema),
                    z.lazy(() => ContractEventUpdateManyWithWhereWithoutContractInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => ContractEventScalarWhereInputSchema), z.lazy(() => ContractEventScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default ContractEventUncheckedUpdateManyWithoutContractNestedInputSchema
