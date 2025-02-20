import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UtmTemplateWhereInputSchema } from './UtmTemplateWhereInputSchema'

export const UtmTemplateListRelationFilterSchema: z.ZodType<Prisma.UtmTemplateListRelationFilter> = z
    .object({
        every: z.lazy(() => UtmTemplateWhereInputSchema).optional(),
        some: z.lazy(() => UtmTemplateWhereInputSchema).optional(),
        none: z.lazy(() => UtmTemplateWhereInputSchema).optional()
    })
    .strict()

export default UtmTemplateListRelationFilterSchema
