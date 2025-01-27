import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberCreateWithoutUserInputSchema } from './WorkspaceMemberCreateWithoutUserInputSchema'
import { WorkspaceMemberUncheckedCreateWithoutUserInputSchema } from './WorkspaceMemberUncheckedCreateWithoutUserInputSchema'
import { WorkspaceMemberCreateOrConnectWithoutUserInputSchema } from './WorkspaceMemberCreateOrConnectWithoutUserInputSchema'
import { WorkspaceMemberCreateManyUserInputEnvelopeSchema } from './WorkspaceMemberCreateManyUserInputEnvelopeSchema'
import { WorkspaceMemberWhereUniqueInputSchema } from './WorkspaceMemberWhereUniqueInputSchema'

export const WorkspaceMemberCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.WorkspaceMemberCreateNestedManyWithoutUserInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => WorkspaceMemberCreateWithoutUserInputSchema),
                z.lazy(() => WorkspaceMemberCreateWithoutUserInputSchema).array(),
                z.lazy(() => WorkspaceMemberUncheckedCreateWithoutUserInputSchema),
                z.lazy(() => WorkspaceMemberUncheckedCreateWithoutUserInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => WorkspaceMemberCreateOrConnectWithoutUserInputSchema),
                z.lazy(() => WorkspaceMemberCreateOrConnectWithoutUserInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => WorkspaceMemberCreateManyUserInputEnvelopeSchema).optional(),
        connect: z
            .union([z.lazy(() => WorkspaceMemberWhereUniqueInputSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputSchema).array()])
            .optional()
    })
    .strict()

export default WorkspaceMemberCreateNestedManyWithoutUserInputSchema
