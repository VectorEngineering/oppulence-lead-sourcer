import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UtmTemplateSelectSchema } from '../inputTypeSchemas/UtmTemplateSelectSchema'
import { UtmTemplateIncludeSchema } from '../inputTypeSchemas/UtmTemplateIncludeSchema'

export const UtmTemplateArgsSchema: z.ZodType<Prisma.UtmTemplateDefaultArgs> = z
    .object({
        select: z.lazy(() => UtmTemplateSelectSchema).optional(),
        include: z.lazy(() => UtmTemplateIncludeSchema).optional()
    })
    .strict()

export default UtmTemplateArgsSchema
