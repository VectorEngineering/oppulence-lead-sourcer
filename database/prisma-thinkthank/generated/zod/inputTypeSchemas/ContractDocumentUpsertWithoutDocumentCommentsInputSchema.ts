import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractDocumentUpdateWithoutDocumentCommentsInputSchema } from './ContractDocumentUpdateWithoutDocumentCommentsInputSchema'
import { ContractDocumentUncheckedUpdateWithoutDocumentCommentsInputSchema } from './ContractDocumentUncheckedUpdateWithoutDocumentCommentsInputSchema'
import { ContractDocumentCreateWithoutDocumentCommentsInputSchema } from './ContractDocumentCreateWithoutDocumentCommentsInputSchema'
import { ContractDocumentUncheckedCreateWithoutDocumentCommentsInputSchema } from './ContractDocumentUncheckedCreateWithoutDocumentCommentsInputSchema'
import { ContractDocumentWhereInputSchema } from './ContractDocumentWhereInputSchema'

export const ContractDocumentUpsertWithoutDocumentCommentsInputSchema: z.ZodType<Prisma.ContractDocumentUpsertWithoutDocumentCommentsInput> =
    z
        .object({
            update: z.union([
                z.lazy(() => ContractDocumentUpdateWithoutDocumentCommentsInputSchema),
                z.lazy(() => ContractDocumentUncheckedUpdateWithoutDocumentCommentsInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ContractDocumentCreateWithoutDocumentCommentsInputSchema),
                z.lazy(() => ContractDocumentUncheckedCreateWithoutDocumentCommentsInputSchema)
            ]),
            where: z.lazy(() => ContractDocumentWhereInputSchema).optional()
        })
        .strict()

export default ContractDocumentUpsertWithoutDocumentCommentsInputSchema
