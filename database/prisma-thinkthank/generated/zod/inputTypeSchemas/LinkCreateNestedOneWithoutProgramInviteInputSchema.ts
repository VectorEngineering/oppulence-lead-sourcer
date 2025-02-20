import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateWithoutProgramInviteInputSchema } from './LinkCreateWithoutProgramInviteInputSchema'
import { LinkUncheckedCreateWithoutProgramInviteInputSchema } from './LinkUncheckedCreateWithoutProgramInviteInputSchema'
import { LinkCreateOrConnectWithoutProgramInviteInputSchema } from './LinkCreateOrConnectWithoutProgramInviteInputSchema'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'

export const LinkCreateNestedOneWithoutProgramInviteInputSchema: z.ZodType<Prisma.LinkCreateNestedOneWithoutProgramInviteInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LinkCreateWithoutProgramInviteInputSchema),
                z.lazy(() => LinkUncheckedCreateWithoutProgramInviteInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutProgramInviteInputSchema).optional(),
        connect: z.lazy(() => LinkWhereUniqueInputSchema).optional()
    })
    .strict()

export default LinkCreateNestedOneWithoutProgramInviteInputSchema
