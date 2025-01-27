import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentAnnotationWhereUniqueInputSchema } from './DocumentAnnotationWhereUniqueInputSchema'
import { DocumentAnnotationUpdateWithoutDocumentInputSchema } from './DocumentAnnotationUpdateWithoutDocumentInputSchema'
import { DocumentAnnotationUncheckedUpdateWithoutDocumentInputSchema } from './DocumentAnnotationUncheckedUpdateWithoutDocumentInputSchema'
import { DocumentAnnotationCreateWithoutDocumentInputSchema } from './DocumentAnnotationCreateWithoutDocumentInputSchema'
import { DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema } from './DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema'

export const DocumentAnnotationUpsertWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentAnnotationUpsertWithWhereUniqueWithoutDocumentInput> =
    z
        .object({
            where: z.lazy(() => DocumentAnnotationWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => DocumentAnnotationUpdateWithoutDocumentInputSchema),
                z.lazy(() => DocumentAnnotationUncheckedUpdateWithoutDocumentInputSchema)
            ]),
            create: z.union([
                z.lazy(() => DocumentAnnotationCreateWithoutDocumentInputSchema),
                z.lazy(() => DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema)
            ])
        })
        .strict()

export default DocumentAnnotationUpsertWithWhereUniqueWithoutDocumentInputSchema
