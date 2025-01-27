import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentScalarWhereInputSchema } from './DocumentScalarWhereInputSchema'
import { DocumentUpdateManyMutationInputSchema } from './DocumentUpdateManyMutationInputSchema'
import { DocumentUncheckedUpdateManyWithoutOwnerInputSchema } from './DocumentUncheckedUpdateManyWithoutOwnerInputSchema'

export const DocumentUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.DocumentUpdateManyWithWhereWithoutOwnerInput> = z
    .object({
        where: z.lazy(() => DocumentScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => DocumentUpdateManyMutationInputSchema),
            z.lazy(() => DocumentUncheckedUpdateManyWithoutOwnerInputSchema)
        ])
    })
    .strict()

export default DocumentUpdateManyWithWhereWithoutOwnerInputSchema
