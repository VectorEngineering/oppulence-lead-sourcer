import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema'
import { ProgramApplicationCreateWithoutPartnerInputSchema } from './ProgramApplicationCreateWithoutPartnerInputSchema'
import { ProgramApplicationUncheckedCreateWithoutPartnerInputSchema } from './ProgramApplicationUncheckedCreateWithoutPartnerInputSchema'

export const ProgramApplicationCreateOrConnectWithoutPartnerInputSchema: z.ZodType<Prisma.ProgramApplicationCreateOrConnectWithoutPartnerInput> =
    z
        .object({
            where: z.lazy(() => ProgramApplicationWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ProgramApplicationCreateWithoutPartnerInputSchema),
                z.lazy(() => ProgramApplicationUncheckedCreateWithoutPartnerInputSchema)
            ])
        })
        .strict()

export default ProgramApplicationCreateOrConnectWithoutPartnerInputSchema
