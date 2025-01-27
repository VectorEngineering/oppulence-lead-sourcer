import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainUpdateWithoutDomainInputSchema } from './RegisteredDomainUpdateWithoutDomainInputSchema'
import { RegisteredDomainUncheckedUpdateWithoutDomainInputSchema } from './RegisteredDomainUncheckedUpdateWithoutDomainInputSchema'
import { RegisteredDomainCreateWithoutDomainInputSchema } from './RegisteredDomainCreateWithoutDomainInputSchema'
import { RegisteredDomainUncheckedCreateWithoutDomainInputSchema } from './RegisteredDomainUncheckedCreateWithoutDomainInputSchema'
import { RegisteredDomainWhereInputSchema } from './RegisteredDomainWhereInputSchema'

export const RegisteredDomainUpsertWithoutDomainInputSchema: z.ZodType<Prisma.RegisteredDomainUpsertWithoutDomainInput> = z
    .object({
        update: z.union([
            z.lazy(() => RegisteredDomainUpdateWithoutDomainInputSchema),
            z.lazy(() => RegisteredDomainUncheckedUpdateWithoutDomainInputSchema)
        ]),
        create: z.union([
            z.lazy(() => RegisteredDomainCreateWithoutDomainInputSchema),
            z.lazy(() => RegisteredDomainUncheckedCreateWithoutDomainInputSchema)
        ]),
        where: z.lazy(() => RegisteredDomainWhereInputSchema).optional()
    })
    .strict()

export default RegisteredDomainUpsertWithoutDomainInputSchema
