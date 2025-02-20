import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentCommentWhereUniqueInputSchema } from './DocumentCommentWhereUniqueInputSchema'
import { DocumentCommentUpdateWithoutDocumentInputSchema } from './DocumentCommentUpdateWithoutDocumentInputSchema'
import { DocumentCommentUncheckedUpdateWithoutDocumentInputSchema } from './DocumentCommentUncheckedUpdateWithoutDocumentInputSchema'

export const DocumentCommentUpdateWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentCommentUpdateWithWhereUniqueWithoutDocumentInput> =
    z
        .object({
            where: z.lazy(() => DocumentCommentWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => DocumentCommentUpdateWithoutDocumentInputSchema),
                z.lazy(() => DocumentCommentUncheckedUpdateWithoutDocumentInputSchema)
            ])
        })
        .strict()

export default DocumentCommentUpdateWithWhereUniqueWithoutDocumentInputSchema
