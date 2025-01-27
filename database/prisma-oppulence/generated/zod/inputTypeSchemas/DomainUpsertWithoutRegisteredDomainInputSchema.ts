import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainUpdateWithoutRegisteredDomainInputSchema } from './DomainUpdateWithoutRegisteredDomainInputSchema'
import { DomainUncheckedUpdateWithoutRegisteredDomainInputSchema } from './DomainUncheckedUpdateWithoutRegisteredDomainInputSchema'
import { DomainCreateWithoutRegisteredDomainInputSchema } from './DomainCreateWithoutRegisteredDomainInputSchema'
import { DomainUncheckedCreateWithoutRegisteredDomainInputSchema } from './DomainUncheckedCreateWithoutRegisteredDomainInputSchema'
import { DomainWhereInputSchema } from './DomainWhereInputSchema'

export const DomainUpsertWithoutRegisteredDomainInputSchema: z.ZodType<Prisma.DomainUpsertWithoutRegisteredDomainInput> = z
    .object({
        update: z.union([
            z.lazy(() => DomainUpdateWithoutRegisteredDomainInputSchema),
            z.lazy(() => DomainUncheckedUpdateWithoutRegisteredDomainInputSchema)
        ]),
        create: z.union([
            z.lazy(() => DomainCreateWithoutRegisteredDomainInputSchema),
            z.lazy(() => DomainUncheckedCreateWithoutRegisteredDomainInputSchema)
        ]),
        where: z.lazy(() => DomainWhereInputSchema).optional()
    })
    .strict()

export default DomainUpsertWithoutRegisteredDomainInputSchema
