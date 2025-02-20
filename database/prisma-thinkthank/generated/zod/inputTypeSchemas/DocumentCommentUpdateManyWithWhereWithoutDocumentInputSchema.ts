import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentCommentScalarWhereInputSchema } from './DocumentCommentScalarWhereInputSchema'
import { DocumentCommentUpdateManyMutationInputSchema } from './DocumentCommentUpdateManyMutationInputSchema'
import { DocumentCommentUncheckedUpdateManyWithoutDocumentInputSchema } from './DocumentCommentUncheckedUpdateManyWithoutDocumentInputSchema'

export const DocumentCommentUpdateManyWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentCommentUpdateManyWithWhereWithoutDocumentInput> =
    z
        .object({
            where: z.lazy(() => DocumentCommentScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => DocumentCommentUpdateManyMutationInputSchema),
                z.lazy(() => DocumentCommentUncheckedUpdateManyWithoutDocumentInputSchema)
            ])
        })
        .strict()

export default DocumentCommentUpdateManyWithWhereWithoutDocumentInputSchema
