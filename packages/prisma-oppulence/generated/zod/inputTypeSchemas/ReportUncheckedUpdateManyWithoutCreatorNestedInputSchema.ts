import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportCreateWithoutCreatorInputSchema } from './ReportCreateWithoutCreatorInputSchema'
import { ReportUncheckedCreateWithoutCreatorInputSchema } from './ReportUncheckedCreateWithoutCreatorInputSchema'
import { ReportCreateOrConnectWithoutCreatorInputSchema } from './ReportCreateOrConnectWithoutCreatorInputSchema'
import { ReportUpsertWithWhereUniqueWithoutCreatorInputSchema } from './ReportUpsertWithWhereUniqueWithoutCreatorInputSchema'
import { ReportCreateManyCreatorInputEnvelopeSchema } from './ReportCreateManyCreatorInputEnvelopeSchema'
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema'
import { ReportUpdateWithWhereUniqueWithoutCreatorInputSchema } from './ReportUpdateWithWhereUniqueWithoutCreatorInputSchema'
import { ReportUpdateManyWithWhereWithoutCreatorInputSchema } from './ReportUpdateManyWithWhereWithoutCreatorInputSchema'
import { ReportScalarWhereInputSchema } from './ReportScalarWhereInputSchema'

export const ReportUncheckedUpdateManyWithoutCreatorNestedInputSchema: z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutCreatorNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ReportCreateWithoutCreatorInputSchema),
                    z.lazy(() => ReportCreateWithoutCreatorInputSchema).array(),
                    z.lazy(() => ReportUncheckedCreateWithoutCreatorInputSchema),
                    z.lazy(() => ReportUncheckedCreateWithoutCreatorInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ReportCreateOrConnectWithoutCreatorInputSchema),
                    z.lazy(() => ReportCreateOrConnectWithoutCreatorInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ReportUpsertWithWhereUniqueWithoutCreatorInputSchema),
                    z.lazy(() => ReportUpsertWithWhereUniqueWithoutCreatorInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ReportCreateManyCreatorInputEnvelopeSchema).optional(),
            set: z.union([z.lazy(() => ReportWhereUniqueInputSchema), z.lazy(() => ReportWhereUniqueInputSchema).array()]).optional(),
            disconnect: z
                .union([z.lazy(() => ReportWhereUniqueInputSchema), z.lazy(() => ReportWhereUniqueInputSchema).array()])
                .optional(),
            delete: z.union([z.lazy(() => ReportWhereUniqueInputSchema), z.lazy(() => ReportWhereUniqueInputSchema).array()]).optional(),
            connect: z.union([z.lazy(() => ReportWhereUniqueInputSchema), z.lazy(() => ReportWhereUniqueInputSchema).array()]).optional(),
            update: z
                .union([
                    z.lazy(() => ReportUpdateWithWhereUniqueWithoutCreatorInputSchema),
                    z.lazy(() => ReportUpdateWithWhereUniqueWithoutCreatorInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ReportUpdateManyWithWhereWithoutCreatorInputSchema),
                    z.lazy(() => ReportUpdateManyWithWhereWithoutCreatorInputSchema).array()
                ])
                .optional(),
            deleteMany: z.union([z.lazy(() => ReportScalarWhereInputSchema), z.lazy(() => ReportScalarWhereInputSchema).array()]).optional()
        })
        .strict()

export default ReportUncheckedUpdateManyWithoutCreatorNestedInputSchema
