import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainScalarWhereInputSchema } from './RegisteredDomainScalarWhereInputSchema'
import { RegisteredDomainUpdateManyMutationInputSchema } from './RegisteredDomainUpdateManyMutationInputSchema'
import { RegisteredDomainUncheckedUpdateManyWithoutProjectInputSchema } from './RegisteredDomainUncheckedUpdateManyWithoutProjectInputSchema'

export const RegisteredDomainUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.RegisteredDomainUpdateManyWithWhereWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => RegisteredDomainScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => RegisteredDomainUpdateManyMutationInputSchema),
                z.lazy(() => RegisteredDomainUncheckedUpdateManyWithoutProjectInputSchema)
            ])
        })
        .strict()

export default RegisteredDomainUpdateManyWithWhereWithoutProjectInputSchema
