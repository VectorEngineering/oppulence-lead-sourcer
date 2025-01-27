import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractDocumentCreateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentCreateWithoutDocumentAnnotationsInputSchema'
import { ContractDocumentUncheckedCreateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentUncheckedCreateWithoutDocumentAnnotationsInputSchema'
import { ContractDocumentCreateOrConnectWithoutDocumentAnnotationsInputSchema } from './ContractDocumentCreateOrConnectWithoutDocumentAnnotationsInputSchema'
import { ContractDocumentWhereUniqueInputSchema } from './ContractDocumentWhereUniqueInputSchema'

export const ContractDocumentCreateNestedOneWithoutDocumentAnnotationsInputSchema: z.ZodType<Prisma.ContractDocumentCreateNestedOneWithoutDocumentAnnotationsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractDocumentCreateWithoutDocumentAnnotationsInputSchema),
                    z.lazy(() => ContractDocumentUncheckedCreateWithoutDocumentAnnotationsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ContractDocumentCreateOrConnectWithoutDocumentAnnotationsInputSchema).optional(),
            connect: z.lazy(() => ContractDocumentWhereUniqueInputSchema).optional()
        })
        .strict()

export default ContractDocumentCreateNestedOneWithoutDocumentAnnotationsInputSchema
