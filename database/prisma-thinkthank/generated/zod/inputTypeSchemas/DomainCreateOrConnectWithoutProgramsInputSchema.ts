import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema'
import { DomainCreateWithoutProgramsInputSchema } from './DomainCreateWithoutProgramsInputSchema'
import { DomainUncheckedCreateWithoutProgramsInputSchema } from './DomainUncheckedCreateWithoutProgramsInputSchema'

export const DomainCreateOrConnectWithoutProgramsInputSchema: z.ZodType<Prisma.DomainCreateOrConnectWithoutProgramsInput> = z
    .object({
        where: z.lazy(() => DomainWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => DomainCreateWithoutProgramsInputSchema),
            z.lazy(() => DomainUncheckedCreateWithoutProgramsInputSchema)
        ])
    })
    .strict()

export default DomainCreateOrConnectWithoutProgramsInputSchema
