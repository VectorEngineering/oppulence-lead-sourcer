import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberCreateManyUserInputSchema } from './WorkspaceMemberCreateManyUserInputSchema'

export const WorkspaceMemberCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.WorkspaceMemberCreateManyUserInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => WorkspaceMemberCreateManyUserInputSchema),
            z.lazy(() => WorkspaceMemberCreateManyUserInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default WorkspaceMemberCreateManyUserInputEnvelopeSchema
