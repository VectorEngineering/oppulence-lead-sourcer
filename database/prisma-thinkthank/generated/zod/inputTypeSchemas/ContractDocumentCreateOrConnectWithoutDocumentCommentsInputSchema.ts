import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractDocumentWhereUniqueInputSchema } from './ContractDocumentWhereUniqueInputSchema'
import { ContractDocumentCreateWithoutDocumentCommentsInputSchema } from './ContractDocumentCreateWithoutDocumentCommentsInputSchema'
import { ContractDocumentUncheckedCreateWithoutDocumentCommentsInputSchema } from './ContractDocumentUncheckedCreateWithoutDocumentCommentsInputSchema'

export const ContractDocumentCreateOrConnectWithoutDocumentCommentsInputSchema: z.ZodType<Prisma.ContractDocumentCreateOrConnectWithoutDocumentCommentsInput> =
    z
        .object({
            where: z.lazy(() => ContractDocumentWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ContractDocumentCreateWithoutDocumentCommentsInputSchema),
                z.lazy(() => ContractDocumentUncheckedCreateWithoutDocumentCommentsInputSchema)
            ])
        })
        .strict()

export default ContractDocumentCreateOrConnectWithoutDocumentCommentsInputSchema
