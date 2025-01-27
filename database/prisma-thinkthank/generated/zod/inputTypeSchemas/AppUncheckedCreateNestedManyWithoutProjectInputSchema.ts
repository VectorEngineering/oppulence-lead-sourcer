import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AppCreateWithoutProjectInputSchema } from './AppCreateWithoutProjectInputSchema'
import { AppUncheckedCreateWithoutProjectInputSchema } from './AppUncheckedCreateWithoutProjectInputSchema'
import { AppCreateOrConnectWithoutProjectInputSchema } from './AppCreateOrConnectWithoutProjectInputSchema'
import { AppCreateManyProjectInputEnvelopeSchema } from './AppCreateManyProjectInputEnvelopeSchema'
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema'

export const AppUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.AppUncheckedCreateNestedManyWithoutProjectInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => AppCreateWithoutProjectInputSchema),
                z.lazy(() => AppCreateWithoutProjectInputSchema).array(),
                z.lazy(() => AppUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => AppUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => AppCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => AppCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => AppCreateManyProjectInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => AppWhereUniqueInputSchema), z.lazy(() => AppWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default AppUncheckedCreateNestedManyWithoutProjectInputSchema
