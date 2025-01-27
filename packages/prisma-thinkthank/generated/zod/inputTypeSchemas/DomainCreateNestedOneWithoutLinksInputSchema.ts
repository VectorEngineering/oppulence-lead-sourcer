import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainCreateWithoutLinksInputSchema } from './DomainCreateWithoutLinksInputSchema'
import { DomainUncheckedCreateWithoutLinksInputSchema } from './DomainUncheckedCreateWithoutLinksInputSchema'
import { DomainCreateOrConnectWithoutLinksInputSchema } from './DomainCreateOrConnectWithoutLinksInputSchema'
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema'

export const DomainCreateNestedOneWithoutLinksInputSchema: z.ZodType<Prisma.DomainCreateNestedOneWithoutLinksInput> = z
    .object({
        create: z
            .union([z.lazy(() => DomainCreateWithoutLinksInputSchema), z.lazy(() => DomainUncheckedCreateWithoutLinksInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => DomainCreateOrConnectWithoutLinksInputSchema).optional(),
        connect: z.lazy(() => DomainWhereUniqueInputSchema).optional()
    })
    .strict()

export default DomainCreateNestedOneWithoutLinksInputSchema
