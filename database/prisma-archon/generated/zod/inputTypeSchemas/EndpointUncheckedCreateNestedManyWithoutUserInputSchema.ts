import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { EndpointCreateWithoutUserInputSchema } from './EndpointCreateWithoutUserInputSchema'
import { EndpointUncheckedCreateWithoutUserInputSchema } from './EndpointUncheckedCreateWithoutUserInputSchema'
import { EndpointCreateOrConnectWithoutUserInputSchema } from './EndpointCreateOrConnectWithoutUserInputSchema'
import { EndpointCreateManyUserInputEnvelopeSchema } from './EndpointCreateManyUserInputEnvelopeSchema'
import { EndpointWhereUniqueInputSchema } from './EndpointWhereUniqueInputSchema'

export const EndpointUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.EndpointUncheckedCreateNestedManyWithoutUserInput> =
    z
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
            createMany: z.lazy(() => EndpointCreateManyUserInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => EndpointWhereUniqueInputSchema), z.lazy(() => EndpointWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default EndpointUncheckedCreateNestedManyWithoutUserInputSchema
