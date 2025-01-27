import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainCreateWithoutRegisteredDomainInputSchema } from './DomainCreateWithoutRegisteredDomainInputSchema'
import { DomainUncheckedCreateWithoutRegisteredDomainInputSchema } from './DomainUncheckedCreateWithoutRegisteredDomainInputSchema'
import { DomainCreateOrConnectWithoutRegisteredDomainInputSchema } from './DomainCreateOrConnectWithoutRegisteredDomainInputSchema'
import { DomainUpsertWithoutRegisteredDomainInputSchema } from './DomainUpsertWithoutRegisteredDomainInputSchema'
import { DomainWhereInputSchema } from './DomainWhereInputSchema'
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema'
import { DomainUpdateToOneWithWhereWithoutRegisteredDomainInputSchema } from './DomainUpdateToOneWithWhereWithoutRegisteredDomainInputSchema'
import { DomainUpdateWithoutRegisteredDomainInputSchema } from './DomainUpdateWithoutRegisteredDomainInputSchema'
import { DomainUncheckedUpdateWithoutRegisteredDomainInputSchema } from './DomainUncheckedUpdateWithoutRegisteredDomainInputSchema'

export const DomainUpdateOneWithoutRegisteredDomainNestedInputSchema: z.ZodType<Prisma.DomainUpdateOneWithoutRegisteredDomainNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => DomainCreateWithoutRegisteredDomainInputSchema),
                    z.lazy(() => DomainUncheckedCreateWithoutRegisteredDomainInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => DomainCreateOrConnectWithoutRegisteredDomainInputSchema).optional(),
            upsert: z.lazy(() => DomainUpsertWithoutRegisteredDomainInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => DomainWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => DomainWhereInputSchema)]).optional(),
            connect: z.lazy(() => DomainWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => DomainUpdateToOneWithWhereWithoutRegisteredDomainInputSchema),
                    z.lazy(() => DomainUpdateWithoutRegisteredDomainInputSchema),
                    z.lazy(() => DomainUncheckedUpdateWithoutRegisteredDomainInputSchema)
                ])
                .optional()
        })
        .strict()

export default DomainUpdateOneWithoutRegisteredDomainNestedInputSchema
