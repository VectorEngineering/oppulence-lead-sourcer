import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UtmTemplateCreateManyProjectInputSchema } from './UtmTemplateCreateManyProjectInputSchema'

export const UtmTemplateCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.UtmTemplateCreateManyProjectInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => UtmTemplateCreateManyProjectInputSchema),
            z.lazy(() => UtmTemplateCreateManyProjectInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default UtmTemplateCreateManyProjectInputEnvelopeSchema
