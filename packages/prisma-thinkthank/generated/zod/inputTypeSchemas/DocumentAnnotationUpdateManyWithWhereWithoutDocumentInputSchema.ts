import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentAnnotationScalarWhereInputSchema } from './DocumentAnnotationScalarWhereInputSchema'
import { DocumentAnnotationUpdateManyMutationInputSchema } from './DocumentAnnotationUpdateManyMutationInputSchema'
import { DocumentAnnotationUncheckedUpdateManyWithoutDocumentInputSchema } from './DocumentAnnotationUncheckedUpdateManyWithoutDocumentInputSchema'

export const DocumentAnnotationUpdateManyWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentAnnotationUpdateManyWithWhereWithoutDocumentInput> =
    z
        .object({
            where: z.lazy(() => DocumentAnnotationScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => DocumentAnnotationUpdateManyMutationInputSchema),
                z.lazy(() => DocumentAnnotationUncheckedUpdateManyWithoutDocumentInputSchema)
            ])
        })
        .strict()

export default DocumentAnnotationUpdateManyWithWhereWithoutDocumentInputSchema
