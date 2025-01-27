import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema'
import { DomainCreateWithoutRegisteredDomainInputSchema } from './DomainCreateWithoutRegisteredDomainInputSchema'
import { DomainUncheckedCreateWithoutRegisteredDomainInputSchema } from './DomainUncheckedCreateWithoutRegisteredDomainInputSchema'

export const DomainCreateOrConnectWithoutRegisteredDomainInputSchema: z.ZodType<Prisma.DomainCreateOrConnectWithoutRegisteredDomainInput> =
    z
        .object({
            where: z.lazy(() => DomainWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => DomainCreateWithoutRegisteredDomainInputSchema),
                z.lazy(() => DomainUncheckedCreateWithoutRegisteredDomainInputSchema)
            ])
        })
        .strict()

export default DomainCreateOrConnectWithoutRegisteredDomainInputSchema
