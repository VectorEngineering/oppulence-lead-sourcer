import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractDocumentWhereUniqueInputSchema } from './ContractDocumentWhereUniqueInputSchema'
import { ContractDocumentUpdateWithoutContractInputSchema } from './ContractDocumentUpdateWithoutContractInputSchema'
import { ContractDocumentUncheckedUpdateWithoutContractInputSchema } from './ContractDocumentUncheckedUpdateWithoutContractInputSchema'
import { ContractDocumentCreateWithoutContractInputSchema } from './ContractDocumentCreateWithoutContractInputSchema'
import { ContractDocumentUncheckedCreateWithoutContractInputSchema } from './ContractDocumentUncheckedCreateWithoutContractInputSchema'

export const ContractDocumentUpsertWithWhereUniqueWithoutContractInputSchema: z.ZodType<Prisma.ContractDocumentUpsertWithWhereUniqueWithoutContractInput> =
    z
        .object({
            where: z.lazy(() => ContractDocumentWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => ContractDocumentUpdateWithoutContractInputSchema),
                z.lazy(() => ContractDocumentUncheckedUpdateWithoutContractInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ContractDocumentCreateWithoutContractInputSchema),
                z.lazy(() => ContractDocumentUncheckedCreateWithoutContractInputSchema)
            ])
        })
        .strict()

export default ContractDocumentUpsertWithWhereUniqueWithoutContractInputSchema
