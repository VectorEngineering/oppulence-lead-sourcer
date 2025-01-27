import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentScalarWhereInputSchema } from './DocumentScalarWhereInputSchema'
import { DocumentUpdateManyMutationInputSchema } from './DocumentUpdateManyMutationInputSchema'
import { DocumentUncheckedUpdateManyWithoutDealInputSchema } from './DocumentUncheckedUpdateManyWithoutDealInputSchema'

export const DocumentUpdateManyWithWhereWithoutDealInputSchema: z.ZodType<Prisma.DocumentUpdateManyWithWhereWithoutDealInput> = z
    .object({
        where: z.lazy(() => DocumentScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => DocumentUpdateManyMutationInputSchema),
            z.lazy(() => DocumentUncheckedUpdateManyWithoutDealInputSchema)
        ])
    })
    .strict()

export default DocumentUpdateManyWithWhereWithoutDealInputSchema
