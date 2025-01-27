import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UtmTemplateCreateWithoutProjectInputSchema } from './UtmTemplateCreateWithoutProjectInputSchema'
import { UtmTemplateUncheckedCreateWithoutProjectInputSchema } from './UtmTemplateUncheckedCreateWithoutProjectInputSchema'
import { UtmTemplateCreateOrConnectWithoutProjectInputSchema } from './UtmTemplateCreateOrConnectWithoutProjectInputSchema'
import { UtmTemplateUpsertWithWhereUniqueWithoutProjectInputSchema } from './UtmTemplateUpsertWithWhereUniqueWithoutProjectInputSchema'
import { UtmTemplateCreateManyProjectInputEnvelopeSchema } from './UtmTemplateCreateManyProjectInputEnvelopeSchema'
import { UtmTemplateWhereUniqueInputSchema } from './UtmTemplateWhereUniqueInputSchema'
import { UtmTemplateUpdateWithWhereUniqueWithoutProjectInputSchema } from './UtmTemplateUpdateWithWhereUniqueWithoutProjectInputSchema'
import { UtmTemplateUpdateManyWithWhereWithoutProjectInputSchema } from './UtmTemplateUpdateManyWithWhereWithoutProjectInputSchema'
import { UtmTemplateScalarWhereInputSchema } from './UtmTemplateScalarWhereInputSchema'

export const UtmTemplateUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.UtmTemplateUncheckedUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => UtmTemplateCreateWithoutProjectInputSchema),
                    z.lazy(() => UtmTemplateCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => UtmTemplateUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => UtmTemplateUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => UtmTemplateCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => UtmTemplateCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => UtmTemplateUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => UtmTemplateUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => UtmTemplateCreateManyProjectInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => UtmTemplateWhereUniqueInputSchema), z.lazy(() => UtmTemplateWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => UtmTemplateWhereUniqueInputSchema), z.lazy(() => UtmTemplateWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => UtmTemplateWhereUniqueInputSchema), z.lazy(() => UtmTemplateWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => UtmTemplateWhereUniqueInputSchema), z.lazy(() => UtmTemplateWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => UtmTemplateUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => UtmTemplateUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => UtmTemplateUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => UtmTemplateUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => UtmTemplateScalarWhereInputSchema), z.lazy(() => UtmTemplateScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default UtmTemplateUncheckedUpdateManyWithoutProjectNestedInputSchema
