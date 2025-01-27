import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { EndpointCreateWithoutUserInputSchema } from './EndpointCreateWithoutUserInputSchema'
import { EndpointUncheckedCreateWithoutUserInputSchema } from './EndpointUncheckedCreateWithoutUserInputSchema'
import { EndpointCreateOrConnectWithoutUserInputSchema } from './EndpointCreateOrConnectWithoutUserInputSchema'
import { EndpointUpsertWithWhereUniqueWithoutUserInputSchema } from './EndpointUpsertWithWhereUniqueWithoutUserInputSchema'
import { EndpointCreateManyUserInputEnvelopeSchema } from './EndpointCreateManyUserInputEnvelopeSchema'
import { EndpointWhereUniqueInputSchema } from './EndpointWhereUniqueInputSchema'
import { EndpointUpdateWithWhereUniqueWithoutUserInputSchema } from './EndpointUpdateWithWhereUniqueWithoutUserInputSchema'
import { EndpointUpdateManyWithWhereWithoutUserInputSchema } from './EndpointUpdateManyWithWhereWithoutUserInputSchema'
import { EndpointScalarWhereInputSchema } from './EndpointScalarWhereInputSchema'

export const EndpointUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.EndpointUpdateManyWithoutUserNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => EndpointCreateWithoutUserInputSchema),
                z.lazy(() => EndpointCreateWithoutUserInputSchema).array(),
                z.lazy(() => EndpointUncheckedCreateWithoutUserInputSchema),
                z.lazy(() => EndpointUncheckedCreateWithoutUserInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => EndpointCreateOrConnectWithoutUserInputSchema),
                z.lazy(() => EndpointCreateOrConnectWithoutUserInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => EndpointUpsertWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => EndpointUpsertWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => EndpointCreateManyUserInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => EndpointWhereUniqueInputSchema), z.lazy(() => EndpointWhereUniqueInputSchema).array()]).optional(),
        disconnect: z
            .union([z.lazy(() => EndpointWhereUniqueInputSchema), z.lazy(() => EndpointWhereUniqueInputSchema).array()])
            .optional(),
        delete: z.union([z.lazy(() => EndpointWhereUniqueInputSchema), z.lazy(() => EndpointWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => EndpointWhereUniqueInputSchema), z.lazy(() => EndpointWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => EndpointUpdateWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => EndpointUpdateWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => EndpointUpdateManyWithWhereWithoutUserInputSchema),
                z.lazy(() => EndpointUpdateManyWithWhereWithoutUserInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => EndpointScalarWhereInputSchema), z.lazy(() => EndpointScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default EndpointUpdateManyWithoutUserNestedInputSchema
