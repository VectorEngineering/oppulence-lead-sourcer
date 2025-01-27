import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateWithoutProgramInputSchema } from './LinkCreateWithoutProgramInputSchema'
import { LinkUncheckedCreateWithoutProgramInputSchema } from './LinkUncheckedCreateWithoutProgramInputSchema'
import { LinkCreateOrConnectWithoutProgramInputSchema } from './LinkCreateOrConnectWithoutProgramInputSchema'
import { LinkCreateManyProgramInputEnvelopeSchema } from './LinkCreateManyProgramInputEnvelopeSchema'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'

export const LinkUncheckedCreateNestedManyWithoutProgramInputSchema: z.ZodType<Prisma.LinkUncheckedCreateNestedManyWithoutProgramInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LinkCreateWithoutProgramInputSchema),
                z.lazy(() => LinkCreateWithoutProgramInputSchema).array(),
                z.lazy(() => LinkUncheckedCreateWithoutProgramInputSchema),
                z.lazy(() => LinkUncheckedCreateWithoutProgramInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LinkCreateOrConnectWithoutProgramInputSchema),
                z.lazy(() => LinkCreateOrConnectWithoutProgramInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LinkCreateManyProgramInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default LinkUncheckedCreateNestedManyWithoutProgramInputSchema
