import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkCreateWithoutProgramInputSchema } from './LinkCreateWithoutProgramInputSchema'
import { LinkUncheckedCreateWithoutProgramInputSchema } from './LinkUncheckedCreateWithoutProgramInputSchema'

export const LinkCreateOrConnectWithoutProgramInputSchema: z.ZodType<Prisma.LinkCreateOrConnectWithoutProgramInput> = z
    .object({
        where: z.lazy(() => LinkWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LinkCreateWithoutProgramInputSchema), z.lazy(() => LinkUncheckedCreateWithoutProgramInputSchema)])
    })
    .strict()

export default LinkCreateOrConnectWithoutProgramInputSchema
