import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DocumentAnnotationSelectSchema } from '../inputTypeSchemas/DocumentAnnotationSelectSchema'
import { DocumentAnnotationIncludeSchema } from '../inputTypeSchemas/DocumentAnnotationIncludeSchema'

export const DocumentAnnotationArgsSchema: z.ZodType<Prisma.DocumentAnnotationDefaultArgs> = z
    .object({
        select: z.lazy(() => DocumentAnnotationSelectSchema).optional(),
        include: z.lazy(() => DocumentAnnotationIncludeSchema).optional()
    })
    .strict()

export default DocumentAnnotationArgsSchema
