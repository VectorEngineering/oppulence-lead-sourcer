import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainWhereUniqueInputSchema } from './RegisteredDomainWhereUniqueInputSchema'
import { RegisteredDomainUpdateWithoutProjectInputSchema } from './RegisteredDomainUpdateWithoutProjectInputSchema'
import { RegisteredDomainUncheckedUpdateWithoutProjectInputSchema } from './RegisteredDomainUncheckedUpdateWithoutProjectInputSchema'

export const RegisteredDomainUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RegisteredDomainUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => RegisteredDomainWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => RegisteredDomainUpdateWithoutProjectInputSchema),
                z.lazy(() => RegisteredDomainUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default RegisteredDomainUpdateWithWhereUniqueWithoutProjectInputSchema
