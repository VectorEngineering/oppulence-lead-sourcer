import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberCreateWithoutUserInputSchema } from './WorkspaceMemberCreateWithoutUserInputSchema'
import { WorkspaceMemberUncheckedCreateWithoutUserInputSchema } from './WorkspaceMemberUncheckedCreateWithoutUserInputSchema'
import { WorkspaceMemberCreateOrConnectWithoutUserInputSchema } from './WorkspaceMemberCreateOrConnectWithoutUserInputSchema'
import { WorkspaceMemberUpsertWithWhereUniqueWithoutUserInputSchema } from './WorkspaceMemberUpsertWithWhereUniqueWithoutUserInputSchema'
import { WorkspaceMemberCreateManyUserInputEnvelopeSchema } from './WorkspaceMemberCreateManyUserInputEnvelopeSchema'
import { WorkspaceMemberWhereUniqueInputSchema } from './WorkspaceMemberWhereUniqueInputSchema'
import { WorkspaceMemberUpdateWithWhereUniqueWithoutUserInputSchema } from './WorkspaceMemberUpdateWithWhereUniqueWithoutUserInputSchema'
import { WorkspaceMemberUpdateManyWithWhereWithoutUserInputSchema } from './WorkspaceMemberUpdateManyWithWhereWithoutUserInputSchema'
import { WorkspaceMemberScalarWhereInputSchema } from './WorkspaceMemberScalarWhereInputSchema'

export const WorkspaceMemberUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.WorkspaceMemberUpdateManyWithoutUserNestedInput> = z
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
        upsert: z
            .union([
                z.lazy(() => WorkspaceMemberUpsertWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => WorkspaceMemberUpsertWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => WorkspaceMemberCreateManyUserInputEnvelopeSchema).optional(),
        set: z
            .union([z.lazy(() => WorkspaceMemberWhereUniqueInputSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputSchema).array()])
            .optional(),
        disconnect: z
            .union([z.lazy(() => WorkspaceMemberWhereUniqueInputSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => WorkspaceMemberWhereUniqueInputSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => WorkspaceMemberWhereUniqueInputSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => WorkspaceMemberUpdateWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => WorkspaceMemberUpdateWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => WorkspaceMemberUpdateManyWithWhereWithoutUserInputSchema),
                z.lazy(() => WorkspaceMemberUpdateManyWithWhereWithoutUserInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => WorkspaceMemberScalarWhereInputSchema), z.lazy(() => WorkspaceMemberScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default WorkspaceMemberUpdateManyWithoutUserNestedInputSchema
