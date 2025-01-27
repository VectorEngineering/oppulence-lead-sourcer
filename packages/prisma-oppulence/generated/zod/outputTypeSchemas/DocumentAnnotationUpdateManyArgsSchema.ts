import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DocumentAnnotationUpdateManyMutationInputSchema } from '../inputTypeSchemas/DocumentAnnotationUpdateManyMutationInputSchema'
import { DocumentAnnotationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DocumentAnnotationUncheckedUpdateManyInputSchema'
import { DocumentAnnotationWhereInputSchema } from '../inputTypeSchemas/DocumentAnnotationWhereInputSchema'

export const DocumentAnnotationUpdateManyArgsSchema: z.ZodType<Prisma.DocumentAnnotationUpdateManyArgs> = z
    .object({
        data: z.union([DocumentAnnotationUpdateManyMutationInputSchema, DocumentAnnotationUncheckedUpdateManyInputSchema]),
        where: DocumentAnnotationWhereInputSchema.optional()
    })
    .strict()

export default DocumentAnnotationUpdateManyArgsSchema
