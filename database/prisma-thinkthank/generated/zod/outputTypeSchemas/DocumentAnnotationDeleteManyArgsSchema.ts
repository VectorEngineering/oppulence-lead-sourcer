import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DocumentAnnotationWhereInputSchema } from '../inputTypeSchemas/DocumentAnnotationWhereInputSchema'

export const DocumentAnnotationDeleteManyArgsSchema: z.ZodType<Prisma.DocumentAnnotationDeleteManyArgs> = z
    .object({
        where: DocumentAnnotationWhereInputSchema.optional()
    })
    .strict()

export default DocumentAnnotationDeleteManyArgsSchema
