import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateNestedOneWithoutProgramInviteInputSchema } from './LinkCreateNestedOneWithoutProgramInviteInputSchema'

export const ProgramInviteCreateWithoutProgramInputSchema: z.ZodType<Prisma.ProgramInviteCreateWithoutProgramInput> = z
    .object({
        id: z.string().cuid().optional(),
        email: z.string(),
        createdAt: z.coerce.date().optional(),
        link: z.lazy(() => LinkCreateNestedOneWithoutProgramInviteInputSchema).optional()
    })
    .strict()

export default ProgramInviteCreateWithoutProgramInputSchema
