import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractDocumentUpdateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentUpdateWithoutDocumentAnnotationsInputSchema'
import { ContractDocumentUncheckedUpdateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentUncheckedUpdateWithoutDocumentAnnotationsInputSchema'
import { ContractDocumentCreateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentCreateWithoutDocumentAnnotationsInputSchema'
import { ContractDocumentUncheckedCreateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentUncheckedCreateWithoutDocumentAnnotationsInputSchema'
import { ContractDocumentWhereInputSchema } from './ContractDocumentWhereInputSchema'

export const ContractDocumentUpsertWithoutDocumentAnnotationsInputSchema: z.ZodType<Prisma.ContractDocumentUpsertWithoutDocumentAnnotationsInput> =
    z
        .object({
            update: z.union([
                z.lazy(() => ContractDocumentUpdateWithoutDocumentAnnotationsInputSchema),
                z.lazy(() => ContractDocumentUncheckedUpdateWithoutDocumentAnnotationsInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ContractDocumentCreateWithoutDocumentAnnotationsInputSchema),
                z.lazy(() => ContractDocumentUncheckedCreateWithoutDocumentAnnotationsInputSchema)
            ]),
            where: z.lazy(() => ContractDocumentWhereInputSchema).optional()
        })
        .strict()

export default ContractDocumentUpsertWithoutDocumentAnnotationsInputSchema
