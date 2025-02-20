import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateWithoutParentContractInputSchema } from './ContractCreateWithoutParentContractInputSchema'
import { ContractUncheckedCreateWithoutParentContractInputSchema } from './ContractUncheckedCreateWithoutParentContractInputSchema'
import { ContractCreateOrConnectWithoutParentContractInputSchema } from './ContractCreateOrConnectWithoutParentContractInputSchema'
import { ContractCreateManyParentContractInputEnvelopeSchema } from './ContractCreateManyParentContractInputEnvelopeSchema'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'

export const ContractUncheckedCreateNestedManyWithoutParentContractInputSchema: z.ZodType<Prisma.ContractUncheckedCreateNestedManyWithoutParentContractInput> =
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
            createMany: z.lazy(() => ContractCreateManyParentContractInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => ContractWhereUniqueInputSchema), z.lazy(() => ContractWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default ContractUncheckedCreateNestedManyWithoutParentContractInputSchema
