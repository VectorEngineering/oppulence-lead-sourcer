import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainCreateWithoutProjectInputSchema } from './RegisteredDomainCreateWithoutProjectInputSchema'
import { RegisteredDomainUncheckedCreateWithoutProjectInputSchema } from './RegisteredDomainUncheckedCreateWithoutProjectInputSchema'
import { RegisteredDomainCreateOrConnectWithoutProjectInputSchema } from './RegisteredDomainCreateOrConnectWithoutProjectInputSchema'
import { RegisteredDomainCreateManyProjectInputEnvelopeSchema } from './RegisteredDomainCreateManyProjectInputEnvelopeSchema'
import { RegisteredDomainWhereUniqueInputSchema } from './RegisteredDomainWhereUniqueInputSchema'

export const RegisteredDomainCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.RegisteredDomainCreateNestedManyWithoutProjectInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => RegisteredDomainCreateWithoutProjectInputSchema),
                    z.lazy(() => RegisteredDomainCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => RegisteredDomainUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => RegisteredDomainUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => RegisteredDomainCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => RegisteredDomainCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => RegisteredDomainCreateManyProjectInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => RegisteredDomainWhereUniqueInputSchema), z.lazy(() => RegisteredDomainWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default RegisteredDomainCreateNestedManyWithoutProjectInputSchema
