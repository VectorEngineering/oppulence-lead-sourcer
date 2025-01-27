import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainCreateWithoutLinksInputSchema } from './DomainCreateWithoutLinksInputSchema'
import { DomainUncheckedCreateWithoutLinksInputSchema } from './DomainUncheckedCreateWithoutLinksInputSchema'
import { DomainCreateOrConnectWithoutLinksInputSchema } from './DomainCreateOrConnectWithoutLinksInputSchema'
import { DomainUpsertWithoutLinksInputSchema } from './DomainUpsertWithoutLinksInputSchema'
import { DomainWhereInputSchema } from './DomainWhereInputSchema'
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema'
import { DomainUpdateToOneWithWhereWithoutLinksInputSchema } from './DomainUpdateToOneWithWhereWithoutLinksInputSchema'
import { DomainUpdateWithoutLinksInputSchema } from './DomainUpdateWithoutLinksInputSchema'
import { DomainUncheckedUpdateWithoutLinksInputSchema } from './DomainUncheckedUpdateWithoutLinksInputSchema'

export const DomainUpdateOneWithoutLinksNestedInputSchema: z.ZodType<Prisma.DomainUpdateOneWithoutLinksNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => DomainCreateWithoutLinksInputSchema), z.lazy(() => DomainUncheckedCreateWithoutLinksInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => DomainCreateOrConnectWithoutLinksInputSchema).optional(),
        upsert: z.lazy(() => DomainUpsertWithoutLinksInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => DomainWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => DomainWhereInputSchema)]).optional(),
        connect: z.lazy(() => DomainWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => DomainUpdateToOneWithWhereWithoutLinksInputSchema),
                z.lazy(() => DomainUpdateWithoutLinksInputSchema),
                z.lazy(() => DomainUncheckedUpdateWithoutLinksInputSchema)
            ])
            .optional()
    })
    .strict()

export default DomainUpdateOneWithoutLinksNestedInputSchema
