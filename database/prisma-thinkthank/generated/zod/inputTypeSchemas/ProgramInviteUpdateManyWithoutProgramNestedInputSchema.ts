import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramInviteCreateWithoutProgramInputSchema } from './ProgramInviteCreateWithoutProgramInputSchema'
import { ProgramInviteUncheckedCreateWithoutProgramInputSchema } from './ProgramInviteUncheckedCreateWithoutProgramInputSchema'
import { ProgramInviteCreateOrConnectWithoutProgramInputSchema } from './ProgramInviteCreateOrConnectWithoutProgramInputSchema'
import { ProgramInviteUpsertWithWhereUniqueWithoutProgramInputSchema } from './ProgramInviteUpsertWithWhereUniqueWithoutProgramInputSchema'
import { ProgramInviteCreateManyProgramInputEnvelopeSchema } from './ProgramInviteCreateManyProgramInputEnvelopeSchema'
import { ProgramInviteWhereUniqueInputSchema } from './ProgramInviteWhereUniqueInputSchema'
import { ProgramInviteUpdateWithWhereUniqueWithoutProgramInputSchema } from './ProgramInviteUpdateWithWhereUniqueWithoutProgramInputSchema'
import { ProgramInviteUpdateManyWithWhereWithoutProgramInputSchema } from './ProgramInviteUpdateManyWithWhereWithoutProgramInputSchema'
import { ProgramInviteScalarWhereInputSchema } from './ProgramInviteScalarWhereInputSchema'

export const ProgramInviteUpdateManyWithoutProgramNestedInputSchema: z.ZodType<Prisma.ProgramInviteUpdateManyWithoutProgramNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ProgramInviteCreateWithoutProgramInputSchema),
                z.lazy(() => ProgramInviteCreateWithoutProgramInputSchema).array(),
                z.lazy(() => ProgramInviteUncheckedCreateWithoutProgramInputSchema),
                z.lazy(() => ProgramInviteUncheckedCreateWithoutProgramInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ProgramInviteCreateOrConnectWithoutProgramInputSchema),
                z.lazy(() => ProgramInviteCreateOrConnectWithoutProgramInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => ProgramInviteUpsertWithWhereUniqueWithoutProgramInputSchema),
                z.lazy(() => ProgramInviteUpsertWithWhereUniqueWithoutProgramInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => ProgramInviteCreateManyProgramInputEnvelopeSchema).optional(),
        set: z
            .union([z.lazy(() => ProgramInviteWhereUniqueInputSchema), z.lazy(() => ProgramInviteWhereUniqueInputSchema).array()])
            .optional(),
        disconnect: z
            .union([z.lazy(() => ProgramInviteWhereUniqueInputSchema), z.lazy(() => ProgramInviteWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => ProgramInviteWhereUniqueInputSchema), z.lazy(() => ProgramInviteWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => ProgramInviteWhereUniqueInputSchema), z.lazy(() => ProgramInviteWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => ProgramInviteUpdateWithWhereUniqueWithoutProgramInputSchema),
                z.lazy(() => ProgramInviteUpdateWithWhereUniqueWithoutProgramInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => ProgramInviteUpdateManyWithWhereWithoutProgramInputSchema),
                z.lazy(() => ProgramInviteUpdateManyWithWhereWithoutProgramInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => ProgramInviteScalarWhereInputSchema), z.lazy(() => ProgramInviteScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default ProgramInviteUpdateManyWithoutProgramNestedInputSchema
