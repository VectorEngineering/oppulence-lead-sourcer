import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DashboardCreateWithoutProjectInputSchema } from './DashboardCreateWithoutProjectInputSchema'
import { DashboardUncheckedCreateWithoutProjectInputSchema } from './DashboardUncheckedCreateWithoutProjectInputSchema'
import { DashboardCreateOrConnectWithoutProjectInputSchema } from './DashboardCreateOrConnectWithoutProjectInputSchema'
import { DashboardCreateManyProjectInputEnvelopeSchema } from './DashboardCreateManyProjectInputEnvelopeSchema'
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema'

export const DashboardCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.DashboardCreateNestedManyWithoutProjectInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => DashboardCreateWithoutProjectInputSchema),
                z.lazy(() => DashboardCreateWithoutProjectInputSchema).array(),
                z.lazy(() => DashboardUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => DashboardUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => DashboardCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => DashboardCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => DashboardCreateManyProjectInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => DashboardWhereUniqueInputSchema), z.lazy(() => DashboardWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default DashboardCreateNestedManyWithoutProjectInputSchema
