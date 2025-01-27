import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainWhereUniqueInputSchema } from './RegisteredDomainWhereUniqueInputSchema'
import { RegisteredDomainCreateWithoutDomainInputSchema } from './RegisteredDomainCreateWithoutDomainInputSchema'
import { RegisteredDomainUncheckedCreateWithoutDomainInputSchema } from './RegisteredDomainUncheckedCreateWithoutDomainInputSchema'

export const RegisteredDomainCreateOrConnectWithoutDomainInputSchema: z.ZodType<Prisma.RegisteredDomainCreateOrConnectWithoutDomainInput> =
    z
        .object({
            where: z.lazy(() => RegisteredDomainWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => RegisteredDomainCreateWithoutDomainInputSchema),
                z.lazy(() => RegisteredDomainUncheckedCreateWithoutDomainInputSchema)
            ])
        })
        .strict()

export default RegisteredDomainCreateOrConnectWithoutDomainInputSchema
