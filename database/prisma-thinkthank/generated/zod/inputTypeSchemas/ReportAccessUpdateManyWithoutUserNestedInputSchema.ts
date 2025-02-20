import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportAccessCreateWithoutUserInputSchema } from './ReportAccessCreateWithoutUserInputSchema'
import { ReportAccessUncheckedCreateWithoutUserInputSchema } from './ReportAccessUncheckedCreateWithoutUserInputSchema'
import { ReportAccessCreateOrConnectWithoutUserInputSchema } from './ReportAccessCreateOrConnectWithoutUserInputSchema'
import { ReportAccessUpsertWithWhereUniqueWithoutUserInputSchema } from './ReportAccessUpsertWithWhereUniqueWithoutUserInputSchema'
import { ReportAccessCreateManyUserInputEnvelopeSchema } from './ReportAccessCreateManyUserInputEnvelopeSchema'
import { ReportAccessWhereUniqueInputSchema } from './ReportAccessWhereUniqueInputSchema'
import { ReportAccessUpdateWithWhereUniqueWithoutUserInputSchema } from './ReportAccessUpdateWithWhereUniqueWithoutUserInputSchema'
import { ReportAccessUpdateManyWithWhereWithoutUserInputSchema } from './ReportAccessUpdateManyWithWhereWithoutUserInputSchema'
import { ReportAccessScalarWhereInputSchema } from './ReportAccessScalarWhereInputSchema'

export const ReportAccessUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ReportAccessUpdateManyWithoutUserNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ReportAccessCreateWithoutUserInputSchema),
                z.lazy(() => ReportAccessCreateWithoutUserInputSchema).array(),
                z.lazy(() => ReportAccessUncheckedCreateWithoutUserInputSchema),
                z.lazy(() => ReportAccessUncheckedCreateWithoutUserInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ReportAccessCreateOrConnectWithoutUserInputSchema),
                z.lazy(() => ReportAccessCreateOrConnectWithoutUserInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => ReportAccessUpsertWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => ReportAccessUpsertWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => ReportAccessCreateManyUserInputEnvelopeSchema).optional(),
        set: z
            .union([z.lazy(() => ReportAccessWhereUniqueInputSchema), z.lazy(() => ReportAccessWhereUniqueInputSchema).array()])
            .optional(),
        disconnect: z
            .union([z.lazy(() => ReportAccessWhereUniqueInputSchema), z.lazy(() => ReportAccessWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => ReportAccessWhereUniqueInputSchema), z.lazy(() => ReportAccessWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => ReportAccessWhereUniqueInputSchema), z.lazy(() => ReportAccessWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => ReportAccessUpdateWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => ReportAccessUpdateWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => ReportAccessUpdateManyWithWhereWithoutUserInputSchema),
                z.lazy(() => ReportAccessUpdateManyWithWhereWithoutUserInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => ReportAccessScalarWhereInputSchema), z.lazy(() => ReportAccessScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default ReportAccessUpdateManyWithoutUserNestedInputSchema
