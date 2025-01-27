import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkCreateWithoutProjectDomainInputSchema } from './LinkCreateWithoutProjectDomainInputSchema'
import { LinkUncheckedCreateWithoutProjectDomainInputSchema } from './LinkUncheckedCreateWithoutProjectDomainInputSchema'

export const LinkCreateOrConnectWithoutProjectDomainInputSchema: z.ZodType<Prisma.LinkCreateOrConnectWithoutProjectDomainInput> = z
    .object({
        where: z.lazy(() => LinkWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LinkCreateWithoutProjectDomainInputSchema),
            z.lazy(() => LinkUncheckedCreateWithoutProjectDomainInputSchema)
        ])
    })
    .strict()

export default LinkCreateOrConnectWithoutProjectDomainInputSchema
