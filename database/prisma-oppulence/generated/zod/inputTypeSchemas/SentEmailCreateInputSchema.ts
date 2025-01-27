import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateNestedOneWithoutSentEmailsInputSchema } from './ProjectCreateNestedOneWithoutSentEmailsInputSchema'

export const SentEmailCreateInputSchema: z.ZodType<Prisma.SentEmailCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        type: z.string(),
        createdAt: z.coerce.date().optional(),
        project: z.lazy(() => ProjectCreateNestedOneWithoutSentEmailsInputSchema).optional()
    })
    .strict()

export default SentEmailCreateInputSchema
