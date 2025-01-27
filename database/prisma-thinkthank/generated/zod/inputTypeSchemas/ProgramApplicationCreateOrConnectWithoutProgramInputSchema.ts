import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema'
import { ProgramApplicationCreateWithoutProgramInputSchema } from './ProgramApplicationCreateWithoutProgramInputSchema'
import { ProgramApplicationUncheckedCreateWithoutProgramInputSchema } from './ProgramApplicationUncheckedCreateWithoutProgramInputSchema'

export const ProgramApplicationCreateOrConnectWithoutProgramInputSchema: z.ZodType<Prisma.ProgramApplicationCreateOrConnectWithoutProgramInput> =
    z
        .object({
            where: z.lazy(() => ProgramApplicationWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ProgramApplicationCreateWithoutProgramInputSchema),
                z.lazy(() => ProgramApplicationUncheckedCreateWithoutProgramInputSchema)
            ])
        })
        .strict()

export default ProgramApplicationCreateOrConnectWithoutProgramInputSchema
