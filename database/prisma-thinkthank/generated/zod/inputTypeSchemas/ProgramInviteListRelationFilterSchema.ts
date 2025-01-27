import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramInviteWhereInputSchema } from './ProgramInviteWhereInputSchema'

export const ProgramInviteListRelationFilterSchema: z.ZodType<Prisma.ProgramInviteListRelationFilter> = z
    .object({
        every: z.lazy(() => ProgramInviteWhereInputSchema).optional(),
        some: z.lazy(() => ProgramInviteWhereInputSchema).optional(),
        none: z.lazy(() => ProgramInviteWhereInputSchema).optional()
    })
    .strict()

export default ProgramInviteListRelationFilterSchema
