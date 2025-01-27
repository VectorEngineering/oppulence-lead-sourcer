import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkCreateWithoutCustomersInputSchema } from './LinkCreateWithoutCustomersInputSchema'
import { LinkUncheckedCreateWithoutCustomersInputSchema } from './LinkUncheckedCreateWithoutCustomersInputSchema'

export const LinkCreateOrConnectWithoutCustomersInputSchema: z.ZodType<Prisma.LinkCreateOrConnectWithoutCustomersInput> = z
    .object({
        where: z.lazy(() => LinkWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LinkCreateWithoutCustomersInputSchema), z.lazy(() => LinkUncheckedCreateWithoutCustomersInputSchema)])
    })
    .strict()

export default LinkCreateOrConnectWithoutCustomersInputSchema
