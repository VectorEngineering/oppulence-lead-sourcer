import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramInviteWhereInputSchema } from './ProgramInviteWhereInputSchema'

export const ProgramInviteNullableRelationFilterSchema: z.ZodType<Prisma.ProgramInviteNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => ProgramInviteWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => ProgramInviteWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default ProgramInviteNullableRelationFilterSchema
