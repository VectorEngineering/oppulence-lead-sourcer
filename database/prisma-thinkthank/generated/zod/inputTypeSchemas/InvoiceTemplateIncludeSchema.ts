import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { InvoiceFindManyArgsSchema } from '../outputTypeSchemas/InvoiceFindManyArgsSchema'
import { InvoiceTemplateCountOutputTypeArgsSchema } from '../outputTypeSchemas/InvoiceTemplateCountOutputTypeArgsSchema'

export const InvoiceTemplateIncludeSchema: z.ZodType<Prisma.InvoiceTemplateInclude> = z
    .object({
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        Invoice: z.union([z.boolean(), z.lazy(() => InvoiceFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => InvoiceTemplateCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default InvoiceTemplateIncludeSchema
