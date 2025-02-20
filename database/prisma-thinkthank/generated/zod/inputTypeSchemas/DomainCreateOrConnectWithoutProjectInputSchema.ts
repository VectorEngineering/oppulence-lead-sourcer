import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema'
import { DomainCreateWithoutProjectInputSchema } from './DomainCreateWithoutProjectInputSchema'
import { DomainUncheckedCreateWithoutProjectInputSchema } from './DomainUncheckedCreateWithoutProjectInputSchema'

export const DomainCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.DomainCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => DomainWhereUniqueInputSchema),
        create: z.union([z.lazy(() => DomainCreateWithoutProjectInputSchema), z.lazy(() => DomainUncheckedCreateWithoutProjectInputSchema)])
    })
    .strict()

export default DomainCreateOrConnectWithoutProjectInputSchema
