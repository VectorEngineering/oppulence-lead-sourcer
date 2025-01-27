import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentCreateWithoutDiscountInputSchema } from './ProgramEnrollmentCreateWithoutDiscountInputSchema'
import { ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema'
import { ProgramEnrollmentCreateOrConnectWithoutDiscountInputSchema } from './ProgramEnrollmentCreateOrConnectWithoutDiscountInputSchema'
import { ProgramEnrollmentUpsertWithWhereUniqueWithoutDiscountInputSchema } from './ProgramEnrollmentUpsertWithWhereUniqueWithoutDiscountInputSchema'
import { ProgramEnrollmentCreateManyDiscountInputEnvelopeSchema } from './ProgramEnrollmentCreateManyDiscountInputEnvelopeSchema'
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema'
import { ProgramEnrollmentUpdateWithWhereUniqueWithoutDiscountInputSchema } from './ProgramEnrollmentUpdateWithWhereUniqueWithoutDiscountInputSchema'
import { ProgramEnrollmentUpdateManyWithWhereWithoutDiscountInputSchema } from './ProgramEnrollmentUpdateManyWithWhereWithoutDiscountInputSchema'
import { ProgramEnrollmentScalarWhereInputSchema } from './ProgramEnrollmentScalarWhereInputSchema'

export const ProgramEnrollmentUpdateManyWithoutDiscountNestedInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpdateManyWithoutDiscountNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProgramEnrollmentCreateWithoutDiscountInputSchema),
                    z.lazy(() => ProgramEnrollmentCreateWithoutDiscountInputSchema).array(),
                    z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema),
                    z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutDiscountInputSchema),
                    z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutDiscountInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ProgramEnrollmentUpsertWithWhereUniqueWithoutDiscountInputSchema),
                    z.lazy(() => ProgramEnrollmentUpsertWithWhereUniqueWithoutDiscountInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ProgramEnrollmentCreateManyDiscountInputEnvelopeSchema).optional(),
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
                    z.lazy(() => ProgramEnrollmentUpdateWithWhereUniqueWithoutDiscountInputSchema),
                    z.lazy(() => ProgramEnrollmentUpdateWithWhereUniqueWithoutDiscountInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ProgramEnrollmentUpdateManyWithWhereWithoutDiscountInputSchema),
                    z.lazy(() => ProgramEnrollmentUpdateManyWithWhereWithoutDiscountInputSchema).array()
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

export default ProgramEnrollmentUpdateManyWithoutDiscountNestedInputSchema
