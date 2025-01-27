import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationCreateWithoutUserInputSchema } from './IntegrationCreateWithoutUserInputSchema'
import { IntegrationUncheckedCreateWithoutUserInputSchema } from './IntegrationUncheckedCreateWithoutUserInputSchema'
import { IntegrationCreateOrConnectWithoutUserInputSchema } from './IntegrationCreateOrConnectWithoutUserInputSchema'
import { IntegrationCreateManyUserInputEnvelopeSchema } from './IntegrationCreateManyUserInputEnvelopeSchema'
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema'

export const IntegrationUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.IntegrationUncheckedCreateNestedManyWithoutUserInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => IntegrationCreateWithoutUserInputSchema),
                    z.lazy(() => IntegrationCreateWithoutUserInputSchema).array(),
                    z.lazy(() => IntegrationUncheckedCreateWithoutUserInputSchema),
                    z.lazy(() => IntegrationUncheckedCreateWithoutUserInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => IntegrationCreateOrConnectWithoutUserInputSchema),
                    z.lazy(() => IntegrationCreateOrConnectWithoutUserInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => IntegrationCreateManyUserInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => IntegrationWhereUniqueInputSchema), z.lazy(() => IntegrationWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default IntegrationUncheckedCreateNestedManyWithoutUserInputSchema
