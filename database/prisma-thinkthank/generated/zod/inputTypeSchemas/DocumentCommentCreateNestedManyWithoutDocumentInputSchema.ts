import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentCommentCreateWithoutDocumentInputSchema } from './DocumentCommentCreateWithoutDocumentInputSchema'
import { DocumentCommentUncheckedCreateWithoutDocumentInputSchema } from './DocumentCommentUncheckedCreateWithoutDocumentInputSchema'
import { DocumentCommentCreateOrConnectWithoutDocumentInputSchema } from './DocumentCommentCreateOrConnectWithoutDocumentInputSchema'
import { DocumentCommentCreateManyDocumentInputEnvelopeSchema } from './DocumentCommentCreateManyDocumentInputEnvelopeSchema'
import { DocumentCommentWhereUniqueInputSchema } from './DocumentCommentWhereUniqueInputSchema'

export const DocumentCommentCreateNestedManyWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentCommentCreateNestedManyWithoutDocumentInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => DocumentCommentCreateWithoutDocumentInputSchema),
                    z.lazy(() => DocumentCommentCreateWithoutDocumentInputSchema).array(),
                    z.lazy(() => DocumentCommentUncheckedCreateWithoutDocumentInputSchema),
                    z.lazy(() => DocumentCommentUncheckedCreateWithoutDocumentInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => DocumentCommentCreateOrConnectWithoutDocumentInputSchema),
                    z.lazy(() => DocumentCommentCreateOrConnectWithoutDocumentInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => DocumentCommentCreateManyDocumentInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => DocumentCommentWhereUniqueInputSchema), z.lazy(() => DocumentCommentWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default DocumentCommentCreateNestedManyWithoutDocumentInputSchema
