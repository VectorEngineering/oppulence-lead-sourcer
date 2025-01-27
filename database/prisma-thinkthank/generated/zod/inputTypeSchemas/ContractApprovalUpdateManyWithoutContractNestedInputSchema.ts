import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractApprovalCreateWithoutContractInputSchema } from './ContractApprovalCreateWithoutContractInputSchema'
import { ContractApprovalUncheckedCreateWithoutContractInputSchema } from './ContractApprovalUncheckedCreateWithoutContractInputSchema'
import { ContractApprovalCreateOrConnectWithoutContractInputSchema } from './ContractApprovalCreateOrConnectWithoutContractInputSchema'
import { ContractApprovalUpsertWithWhereUniqueWithoutContractInputSchema } from './ContractApprovalUpsertWithWhereUniqueWithoutContractInputSchema'
import { ContractApprovalCreateManyContractInputEnvelopeSchema } from './ContractApprovalCreateManyContractInputEnvelopeSchema'
import { ContractApprovalWhereUniqueInputSchema } from './ContractApprovalWhereUniqueInputSchema'
import { ContractApprovalUpdateWithWhereUniqueWithoutContractInputSchema } from './ContractApprovalUpdateWithWhereUniqueWithoutContractInputSchema'
import { ContractApprovalUpdateManyWithWhereWithoutContractInputSchema } from './ContractApprovalUpdateManyWithWhereWithoutContractInputSchema'
import { ContractApprovalScalarWhereInputSchema } from './ContractApprovalScalarWhereInputSchema'

export const ContractApprovalUpdateManyWithoutContractNestedInputSchema: z.ZodType<Prisma.ContractApprovalUpdateManyWithoutContractNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractApprovalCreateWithoutContractInputSchema),
                    z.lazy(() => ContractApprovalCreateWithoutContractInputSchema).array(),
                    z.lazy(() => ContractApprovalUncheckedCreateWithoutContractInputSchema),
                    z.lazy(() => ContractApprovalUncheckedCreateWithoutContractInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ContractApprovalCreateOrConnectWithoutContractInputSchema),
                    z.lazy(() => ContractApprovalCreateOrConnectWithoutContractInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ContractApprovalUpsertWithWhereUniqueWithoutContractInputSchema),
                    z.lazy(() => ContractApprovalUpsertWithWhereUniqueWithoutContractInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ContractApprovalCreateManyContractInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => ContractApprovalWhereUniqueInputSchema), z.lazy(() => ContractApprovalWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => ContractApprovalWhereUniqueInputSchema), z.lazy(() => ContractApprovalWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => ContractApprovalWhereUniqueInputSchema), z.lazy(() => ContractApprovalWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => ContractApprovalWhereUniqueInputSchema), z.lazy(() => ContractApprovalWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => ContractApprovalUpdateWithWhereUniqueWithoutContractInputSchema),
                    z.lazy(() => ContractApprovalUpdateWithWhereUniqueWithoutContractInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ContractApprovalUpdateManyWithWhereWithoutContractInputSchema),
                    z.lazy(() => ContractApprovalUpdateManyWithWhereWithoutContractInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => ContractApprovalScalarWhereInputSchema), z.lazy(() => ContractApprovalScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default ContractApprovalUpdateManyWithoutContractNestedInputSchema
