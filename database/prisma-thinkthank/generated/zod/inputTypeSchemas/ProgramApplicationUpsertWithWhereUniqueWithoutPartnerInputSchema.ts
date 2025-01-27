import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema'
import { ProgramApplicationUpdateWithoutPartnerInputSchema } from './ProgramApplicationUpdateWithoutPartnerInputSchema'
import { ProgramApplicationUncheckedUpdateWithoutPartnerInputSchema } from './ProgramApplicationUncheckedUpdateWithoutPartnerInputSchema'
import { ProgramApplicationCreateWithoutPartnerInputSchema } from './ProgramApplicationCreateWithoutPartnerInputSchema'
import { ProgramApplicationUncheckedCreateWithoutPartnerInputSchema } from './ProgramApplicationUncheckedCreateWithoutPartnerInputSchema'

export const ProgramApplicationUpsertWithWhereUniqueWithoutPartnerInputSchema: z.ZodType<Prisma.ProgramApplicationUpsertWithWhereUniqueWithoutPartnerInput> =
    z
        .object({
            where: z.lazy(() => ProgramApplicationWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => ProgramApplicationUpdateWithoutPartnerInputSchema),
                z.lazy(() => ProgramApplicationUncheckedUpdateWithoutPartnerInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ProgramApplicationCreateWithoutPartnerInputSchema),
                z.lazy(() => ProgramApplicationUncheckedCreateWithoutPartnerInputSchema)
            ])
        })
        .strict()

export default ProgramApplicationUpsertWithWhereUniqueWithoutPartnerInputSchema
