import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainScalarWhereInputSchema } from './DomainScalarWhereInputSchema'
import { DomainUpdateManyMutationInputSchema } from './DomainUpdateManyMutationInputSchema'
import { DomainUncheckedUpdateManyWithoutProjectInputSchema } from './DomainUncheckedUpdateManyWithoutProjectInputSchema'

export const DomainUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.DomainUpdateManyWithWhereWithoutProjectInput> = z
    .object({
        where: z.lazy(() => DomainScalarWhereInputSchema),
        data: z.union([z.lazy(() => DomainUpdateManyMutationInputSchema), z.lazy(() => DomainUncheckedUpdateManyWithoutProjectInputSchema)])
    })
    .strict()

export default DomainUpdateManyWithWhereWithoutProjectInputSchema
