import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainUpdateWithoutLinksInputSchema } from './DomainUpdateWithoutLinksInputSchema'
import { DomainUncheckedUpdateWithoutLinksInputSchema } from './DomainUncheckedUpdateWithoutLinksInputSchema'
import { DomainCreateWithoutLinksInputSchema } from './DomainCreateWithoutLinksInputSchema'
import { DomainUncheckedCreateWithoutLinksInputSchema } from './DomainUncheckedCreateWithoutLinksInputSchema'
import { DomainWhereInputSchema } from './DomainWhereInputSchema'

export const DomainUpsertWithoutLinksInputSchema: z.ZodType<Prisma.DomainUpsertWithoutLinksInput> = z
    .object({
        update: z.union([z.lazy(() => DomainUpdateWithoutLinksInputSchema), z.lazy(() => DomainUncheckedUpdateWithoutLinksInputSchema)]),
        create: z.union([z.lazy(() => DomainCreateWithoutLinksInputSchema), z.lazy(() => DomainUncheckedCreateWithoutLinksInputSchema)]),
        where: z.lazy(() => DomainWhereInputSchema).optional()
    })
    .strict()

export default DomainUpsertWithoutLinksInputSchema
