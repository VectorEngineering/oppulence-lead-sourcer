import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainCreateWithoutDomainInputSchema } from './RegisteredDomainCreateWithoutDomainInputSchema'
import { RegisteredDomainUncheckedCreateWithoutDomainInputSchema } from './RegisteredDomainUncheckedCreateWithoutDomainInputSchema'
import { RegisteredDomainCreateOrConnectWithoutDomainInputSchema } from './RegisteredDomainCreateOrConnectWithoutDomainInputSchema'
import { RegisteredDomainWhereUniqueInputSchema } from './RegisteredDomainWhereUniqueInputSchema'

export const RegisteredDomainCreateNestedOneWithoutDomainInputSchema: z.ZodType<Prisma.RegisteredDomainCreateNestedOneWithoutDomainInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => RegisteredDomainCreateWithoutDomainInputSchema),
                    z.lazy(() => RegisteredDomainUncheckedCreateWithoutDomainInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => RegisteredDomainCreateOrConnectWithoutDomainInputSchema).optional(),
            connect: z.lazy(() => RegisteredDomainWhereUniqueInputSchema).optional()
        })
        .strict()

export default RegisteredDomainCreateNestedOneWithoutDomainInputSchema
