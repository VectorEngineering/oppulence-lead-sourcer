import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageRequiredFieldCreateWithoutStageInputSchema } from './StageRequiredFieldCreateWithoutStageInputSchema'
import { StageRequiredFieldUncheckedCreateWithoutStageInputSchema } from './StageRequiredFieldUncheckedCreateWithoutStageInputSchema'
import { StageRequiredFieldCreateOrConnectWithoutStageInputSchema } from './StageRequiredFieldCreateOrConnectWithoutStageInputSchema'
import { StageRequiredFieldUpsertWithWhereUniqueWithoutStageInputSchema } from './StageRequiredFieldUpsertWithWhereUniqueWithoutStageInputSchema'
import { StageRequiredFieldCreateManyStageInputEnvelopeSchema } from './StageRequiredFieldCreateManyStageInputEnvelopeSchema'
import { StageRequiredFieldWhereUniqueInputSchema } from './StageRequiredFieldWhereUniqueInputSchema'
import { StageRequiredFieldUpdateWithWhereUniqueWithoutStageInputSchema } from './StageRequiredFieldUpdateWithWhereUniqueWithoutStageInputSchema'
import { StageRequiredFieldUpdateManyWithWhereWithoutStageInputSchema } from './StageRequiredFieldUpdateManyWithWhereWithoutStageInputSchema'
import { StageRequiredFieldScalarWhereInputSchema } from './StageRequiredFieldScalarWhereInputSchema'

export const StageRequiredFieldUncheckedUpdateManyWithoutStageNestedInputSchema: z.ZodType<Prisma.StageRequiredFieldUncheckedUpdateManyWithoutStageNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => StageRequiredFieldCreateWithoutStageInputSchema),
                    z.lazy(() => StageRequiredFieldCreateWithoutStageInputSchema).array(),
                    z.lazy(() => StageRequiredFieldUncheckedCreateWithoutStageInputSchema),
                    z.lazy(() => StageRequiredFieldUncheckedCreateWithoutStageInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => StageRequiredFieldCreateOrConnectWithoutStageInputSchema),
                    z.lazy(() => StageRequiredFieldCreateOrConnectWithoutStageInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => StageRequiredFieldUpsertWithWhereUniqueWithoutStageInputSchema),
                    z.lazy(() => StageRequiredFieldUpsertWithWhereUniqueWithoutStageInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => StageRequiredFieldCreateManyStageInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => StageRequiredFieldWhereUniqueInputSchema),
                    z.lazy(() => StageRequiredFieldWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => StageRequiredFieldWhereUniqueInputSchema),
                    z.lazy(() => StageRequiredFieldWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => StageRequiredFieldWhereUniqueInputSchema),
                    z.lazy(() => StageRequiredFieldWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => StageRequiredFieldWhereUniqueInputSchema),
                    z.lazy(() => StageRequiredFieldWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => StageRequiredFieldUpdateWithWhereUniqueWithoutStageInputSchema),
                    z.lazy(() => StageRequiredFieldUpdateWithWhereUniqueWithoutStageInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => StageRequiredFieldUpdateManyWithWhereWithoutStageInputSchema),
                    z.lazy(() => StageRequiredFieldUpdateManyWithWhereWithoutStageInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => StageRequiredFieldScalarWhereInputSchema),
                    z.lazy(() => StageRequiredFieldScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default StageRequiredFieldUncheckedUpdateManyWithoutStageNestedInputSchema
