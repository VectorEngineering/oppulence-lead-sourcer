import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractDocumentScalarWhereInputSchema } from './ContractDocumentScalarWhereInputSchema'
import { ContractDocumentUpdateManyMutationInputSchema } from './ContractDocumentUpdateManyMutationInputSchema'
import { ContractDocumentUncheckedUpdateManyWithoutContractInputSchema } from './ContractDocumentUncheckedUpdateManyWithoutContractInputSchema'

export const ContractDocumentUpdateManyWithWhereWithoutContractInputSchema: z.ZodType<Prisma.ContractDocumentUpdateManyWithWhereWithoutContractInput> =
    z
        .object({
            where: z.lazy(() => ContractDocumentScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ContractDocumentUpdateManyMutationInputSchema),
                z.lazy(() => ContractDocumentUncheckedUpdateManyWithoutContractInputSchema)
            ])
        })
        .strict()

export default ContractDocumentUpdateManyWithWhereWithoutContractInputSchema
