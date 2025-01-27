import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainWhereUniqueInputSchema } from './RegisteredDomainWhereUniqueInputSchema'
import { RegisteredDomainUpdateWithoutProjectInputSchema } from './RegisteredDomainUpdateWithoutProjectInputSchema'
import { RegisteredDomainUncheckedUpdateWithoutProjectInputSchema } from './RegisteredDomainUncheckedUpdateWithoutProjectInputSchema'
import { RegisteredDomainCreateWithoutProjectInputSchema } from './RegisteredDomainCreateWithoutProjectInputSchema'
import { RegisteredDomainUncheckedCreateWithoutProjectInputSchema } from './RegisteredDomainUncheckedCreateWithoutProjectInputSchema'

export const RegisteredDomainUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RegisteredDomainUpsertWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => RegisteredDomainWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => RegisteredDomainUpdateWithoutProjectInputSchema),
                z.lazy(() => RegisteredDomainUncheckedUpdateWithoutProjectInputSchema)
            ]),
            create: z.union([
                z.lazy(() => RegisteredDomainCreateWithoutProjectInputSchema),
                z.lazy(() => RegisteredDomainUncheckedCreateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default RegisteredDomainUpsertWithWhereUniqueWithoutProjectInputSchema
