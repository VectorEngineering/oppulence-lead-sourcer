import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramApplicationCreateWithoutPartnerInputSchema } from './ProgramApplicationCreateWithoutPartnerInputSchema'
import { ProgramApplicationUncheckedCreateWithoutPartnerInputSchema } from './ProgramApplicationUncheckedCreateWithoutPartnerInputSchema'
import { ProgramApplicationCreateOrConnectWithoutPartnerInputSchema } from './ProgramApplicationCreateOrConnectWithoutPartnerInputSchema'
import { ProgramApplicationUpsertWithWhereUniqueWithoutPartnerInputSchema } from './ProgramApplicationUpsertWithWhereUniqueWithoutPartnerInputSchema'
import { ProgramApplicationCreateManyPartnerInputEnvelopeSchema } from './ProgramApplicationCreateManyPartnerInputEnvelopeSchema'
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema'
import { ProgramApplicationUpdateWithWhereUniqueWithoutPartnerInputSchema } from './ProgramApplicationUpdateWithWhereUniqueWithoutPartnerInputSchema'
import { ProgramApplicationUpdateManyWithWhereWithoutPartnerInputSchema } from './ProgramApplicationUpdateManyWithWhereWithoutPartnerInputSchema'
import { ProgramApplicationScalarWhereInputSchema } from './ProgramApplicationScalarWhereInputSchema'

export const ProgramApplicationUpdateManyWithoutPartnerNestedInputSchema: z.ZodType<Prisma.ProgramApplicationUpdateManyWithoutPartnerNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProgramApplicationCreateWithoutPartnerInputSchema),
                    z.lazy(() => ProgramApplicationCreateWithoutPartnerInputSchema).array(),
                    z.lazy(() => ProgramApplicationUncheckedCreateWithoutPartnerInputSchema),
                    z.lazy(() => ProgramApplicationUncheckedCreateWithoutPartnerInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ProgramApplicationCreateOrConnectWithoutPartnerInputSchema),
                    z.lazy(() => ProgramApplicationCreateOrConnectWithoutPartnerInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ProgramApplicationUpsertWithWhereUniqueWithoutPartnerInputSchema),
                    z.lazy(() => ProgramApplicationUpsertWithWhereUniqueWithoutPartnerInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ProgramApplicationCreateManyPartnerInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => ProgramApplicationWhereUniqueInputSchema),
                    z.lazy(() => ProgramApplicationWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => ProgramApplicationWhereUniqueInputSchema),
                    z.lazy(() => ProgramApplicationWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => ProgramApplicationWhereUniqueInputSchema),
                    z.lazy(() => ProgramApplicationWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => ProgramApplicationWhereUniqueInputSchema),
                    z.lazy(() => ProgramApplicationWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => ProgramApplicationUpdateWithWhereUniqueWithoutPartnerInputSchema),
                    z.lazy(() => ProgramApplicationUpdateWithWhereUniqueWithoutPartnerInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ProgramApplicationUpdateManyWithWhereWithoutPartnerInputSchema),
                    z.lazy(() => ProgramApplicationUpdateManyWithWhereWithoutPartnerInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => ProgramApplicationScalarWhereInputSchema),
                    z.lazy(() => ProgramApplicationScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default ProgramApplicationUpdateManyWithoutPartnerNestedInputSchema
