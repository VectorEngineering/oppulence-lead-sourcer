import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramScalarWhereInputSchema } from './ProgramScalarWhereInputSchema'
import { ProgramUpdateManyMutationInputSchema } from './ProgramUpdateManyMutationInputSchema'
import { ProgramUncheckedUpdateManyWithoutPrimaryDomainInputSchema } from './ProgramUncheckedUpdateManyWithoutPrimaryDomainInputSchema'

export const ProgramUpdateManyWithWhereWithoutPrimaryDomainInputSchema: z.ZodType<Prisma.ProgramUpdateManyWithWhereWithoutPrimaryDomainInput> =
    z
        .object({
            where: z.lazy(() => ProgramScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ProgramUpdateManyMutationInputSchema),
                z.lazy(() => ProgramUncheckedUpdateManyWithoutPrimaryDomainInputSchema)
            ])
        })
        .strict()

export default ProgramUpdateManyWithWhereWithoutPrimaryDomainInputSchema
