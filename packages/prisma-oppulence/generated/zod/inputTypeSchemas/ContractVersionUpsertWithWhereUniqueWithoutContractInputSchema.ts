import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractVersionWhereUniqueInputSchema } from './ContractVersionWhereUniqueInputSchema'
import { ContractVersionUpdateWithoutContractInputSchema } from './ContractVersionUpdateWithoutContractInputSchema'
import { ContractVersionUncheckedUpdateWithoutContractInputSchema } from './ContractVersionUncheckedUpdateWithoutContractInputSchema'
import { ContractVersionCreateWithoutContractInputSchema } from './ContractVersionCreateWithoutContractInputSchema'
import { ContractVersionUncheckedCreateWithoutContractInputSchema } from './ContractVersionUncheckedCreateWithoutContractInputSchema'

export const ContractVersionUpsertWithWhereUniqueWithoutContractInputSchema: z.ZodType<Prisma.ContractVersionUpsertWithWhereUniqueWithoutContractInput> =
    z
        .object({
            where: z.lazy(() => ContractVersionWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => ContractVersionUpdateWithoutContractInputSchema),
                z.lazy(() => ContractVersionUncheckedUpdateWithoutContractInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ContractVersionCreateWithoutContractInputSchema),
                z.lazy(() => ContractVersionUncheckedCreateWithoutContractInputSchema)
            ])
        })
        .strict()

export default ContractVersionUpsertWithWhereUniqueWithoutContractInputSchema
