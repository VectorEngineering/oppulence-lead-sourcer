import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentCreateWithoutProgramInputSchema } from './ProgramEnrollmentCreateWithoutProgramInputSchema'
import { ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema'
import { ProgramEnrollmentCreateOrConnectWithoutProgramInputSchema } from './ProgramEnrollmentCreateOrConnectWithoutProgramInputSchema'
import { ProgramEnrollmentUpsertWithWhereUniqueWithoutProgramInputSchema } from './ProgramEnrollmentUpsertWithWhereUniqueWithoutProgramInputSchema'
import { ProgramEnrollmentCreateManyProgramInputEnvelopeSchema } from './ProgramEnrollmentCreateManyProgramInputEnvelopeSchema'
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema'
import { ProgramEnrollmentUpdateWithWhereUniqueWithoutProgramInputSchema } from './ProgramEnrollmentUpdateWithWhereUniqueWithoutProgramInputSchema'
import { ProgramEnrollmentUpdateManyWithWhereWithoutProgramInputSchema } from './ProgramEnrollmentUpdateManyWithWhereWithoutProgramInputSchema'
import { ProgramEnrollmentScalarWhereInputSchema } from './ProgramEnrollmentScalarWhereInputSchema'

export const ProgramEnrollmentUpdateManyWithoutProgramNestedInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpdateManyWithoutProgramNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProgramEnrollmentCreateWithoutProgramInputSchema),
                    z.lazy(() => ProgramEnrollmentCreateWithoutProgramInputSchema).array(),
                    z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema),
                    z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutProgramInputSchema),
                    z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutProgramInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ProgramEnrollmentUpsertWithWhereUniqueWithoutProgramInputSchema),
                    z.lazy(() => ProgramEnrollmentUpsertWithWhereUniqueWithoutProgramInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ProgramEnrollmentCreateManyProgramInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
                    z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
                    z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
                    z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
                    z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => ProgramEnrollmentUpdateWithWhereUniqueWithoutProgramInputSchema),
                    z.lazy(() => ProgramEnrollmentUpdateWithWhereUniqueWithoutProgramInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ProgramEnrollmentUpdateManyWithWhereWithoutProgramInputSchema),
                    z.lazy(() => ProgramEnrollmentUpdateManyWithWhereWithoutProgramInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => ProgramEnrollmentScalarWhereInputSchema),
                    z.lazy(() => ProgramEnrollmentScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default ProgramEnrollmentUpdateManyWithoutProgramNestedInputSchema
