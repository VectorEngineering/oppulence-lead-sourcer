import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportCreateWithoutCreatorInputSchema } from './ReportCreateWithoutCreatorInputSchema'
import { ReportUncheckedCreateWithoutCreatorInputSchema } from './ReportUncheckedCreateWithoutCreatorInputSchema'
import { ReportCreateOrConnectWithoutCreatorInputSchema } from './ReportCreateOrConnectWithoutCreatorInputSchema'
import { ReportCreateManyCreatorInputEnvelopeSchema } from './ReportCreateManyCreatorInputEnvelopeSchema'
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema'

export const ReportUncheckedCreateNestedManyWithoutCreatorInputSchema: z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutCreatorInput> =
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
            createMany: z.lazy(() => ReportCreateManyCreatorInputEnvelopeSchema).optional(),
            connect: z.union([z.lazy(() => ReportWhereUniqueInputSchema), z.lazy(() => ReportWhereUniqueInputSchema).array()]).optional()
        })
        .strict()

export default ReportUncheckedCreateNestedManyWithoutCreatorInputSchema
