import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AppCreateWithoutUserInputSchema } from './AppCreateWithoutUserInputSchema'
import { AppUncheckedCreateWithoutUserInputSchema } from './AppUncheckedCreateWithoutUserInputSchema'
import { AppCreateOrConnectWithoutUserInputSchema } from './AppCreateOrConnectWithoutUserInputSchema'
import { AppCreateManyUserInputEnvelopeSchema } from './AppCreateManyUserInputEnvelopeSchema'
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema'

export const AppUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AppUncheckedCreateNestedManyWithoutUserInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => AppCreateWithoutUserInputSchema),
                z.lazy(() => AppCreateWithoutUserInputSchema).array(),
                z.lazy(() => AppUncheckedCreateWithoutUserInputSchema),
                z.lazy(() => AppUncheckedCreateWithoutUserInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([z.lazy(() => AppCreateOrConnectWithoutUserInputSchema), z.lazy(() => AppCreateOrConnectWithoutUserInputSchema).array()])
            .optional(),
        createMany: z.lazy(() => AppCreateManyUserInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => AppWhereUniqueInputSchema), z.lazy(() => AppWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default AppUncheckedCreateNestedManyWithoutUserInputSchema
