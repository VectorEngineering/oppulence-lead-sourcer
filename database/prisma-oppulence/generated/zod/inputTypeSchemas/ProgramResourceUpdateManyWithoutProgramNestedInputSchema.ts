import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramResourceCreateWithoutProgramInputSchema } from './ProgramResourceCreateWithoutProgramInputSchema'
import { ProgramResourceUncheckedCreateWithoutProgramInputSchema } from './ProgramResourceUncheckedCreateWithoutProgramInputSchema'
import { ProgramResourceCreateOrConnectWithoutProgramInputSchema } from './ProgramResourceCreateOrConnectWithoutProgramInputSchema'
import { ProgramResourceUpsertWithWhereUniqueWithoutProgramInputSchema } from './ProgramResourceUpsertWithWhereUniqueWithoutProgramInputSchema'
import { ProgramResourceCreateManyProgramInputEnvelopeSchema } from './ProgramResourceCreateManyProgramInputEnvelopeSchema'
import { ProgramResourceWhereUniqueInputSchema } from './ProgramResourceWhereUniqueInputSchema'
import { ProgramResourceUpdateWithWhereUniqueWithoutProgramInputSchema } from './ProgramResourceUpdateWithWhereUniqueWithoutProgramInputSchema'
import { ProgramResourceUpdateManyWithWhereWithoutProgramInputSchema } from './ProgramResourceUpdateManyWithWhereWithoutProgramInputSchema'
import { ProgramResourceScalarWhereInputSchema } from './ProgramResourceScalarWhereInputSchema'

export const ProgramResourceUpdateManyWithoutProgramNestedInputSchema: z.ZodType<Prisma.ProgramResourceUpdateManyWithoutProgramNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProgramResourceCreateWithoutProgramInputSchema),
                    z.lazy(() => ProgramResourceCreateWithoutProgramInputSchema).array(),
                    z.lazy(() => ProgramResourceUncheckedCreateWithoutProgramInputSchema),
                    z.lazy(() => ProgramResourceUncheckedCreateWithoutProgramInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ProgramResourceCreateOrConnectWithoutProgramInputSchema),
                    z.lazy(() => ProgramResourceCreateOrConnectWithoutProgramInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ProgramResourceUpsertWithWhereUniqueWithoutProgramInputSchema),
                    z.lazy(() => ProgramResourceUpsertWithWhereUniqueWithoutProgramInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ProgramResourceCreateManyProgramInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => ProgramResourceWhereUniqueInputSchema), z.lazy(() => ProgramResourceWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => ProgramResourceWhereUniqueInputSchema), z.lazy(() => ProgramResourceWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => ProgramResourceWhereUniqueInputSchema), z.lazy(() => ProgramResourceWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => ProgramResourceWhereUniqueInputSchema), z.lazy(() => ProgramResourceWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => ProgramResourceUpdateWithWhereUniqueWithoutProgramInputSchema),
                    z.lazy(() => ProgramResourceUpdateWithWhereUniqueWithoutProgramInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ProgramResourceUpdateManyWithWhereWithoutProgramInputSchema),
                    z.lazy(() => ProgramResourceUpdateManyWithWhereWithoutProgramInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => ProgramResourceScalarWhereInputSchema), z.lazy(() => ProgramResourceScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default ProgramResourceUpdateManyWithoutProgramNestedInputSchema
