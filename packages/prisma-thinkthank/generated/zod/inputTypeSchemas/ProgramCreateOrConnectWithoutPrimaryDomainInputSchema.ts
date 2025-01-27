import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema'
import { ProgramCreateWithoutPrimaryDomainInputSchema } from './ProgramCreateWithoutPrimaryDomainInputSchema'
import { ProgramUncheckedCreateWithoutPrimaryDomainInputSchema } from './ProgramUncheckedCreateWithoutPrimaryDomainInputSchema'

export const ProgramCreateOrConnectWithoutPrimaryDomainInputSchema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutPrimaryDomainInput> = z
    .object({
        where: z.lazy(() => ProgramWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProgramCreateWithoutPrimaryDomainInputSchema),
            z.lazy(() => ProgramUncheckedCreateWithoutPrimaryDomainInputSchema)
        ])
    })
    .strict()

export default ProgramCreateOrConnectWithoutPrimaryDomainInputSchema
