import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainWhereInputSchema } from './DomainWhereInputSchema'
import { DomainUpdateWithoutProgramsInputSchema } from './DomainUpdateWithoutProgramsInputSchema'
import { DomainUncheckedUpdateWithoutProgramsInputSchema } from './DomainUncheckedUpdateWithoutProgramsInputSchema'

export const DomainUpdateToOneWithWhereWithoutProgramsInputSchema: z.ZodType<Prisma.DomainUpdateToOneWithWhereWithoutProgramsInput> = z
    .object({
        where: z.lazy(() => DomainWhereInputSchema).optional(),
        data: z.union([z.lazy(() => DomainUpdateWithoutProgramsInputSchema), z.lazy(() => DomainUncheckedUpdateWithoutProgramsInputSchema)])
    })
    .strict()

export default DomainUpdateToOneWithWhereWithoutProgramsInputSchema
