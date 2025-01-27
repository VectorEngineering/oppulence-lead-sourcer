import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateWithoutProjectInputSchema } from './LeadUpdateWithoutProjectInputSchema'
import { LeadUncheckedUpdateWithoutProjectInputSchema } from './LeadUncheckedUpdateWithoutProjectInputSchema'
import { LeadCreateWithoutProjectInputSchema } from './LeadCreateWithoutProjectInputSchema'
import { LeadUncheckedCreateWithoutProjectInputSchema } from './LeadUncheckedCreateWithoutProjectInputSchema'

export const LeadUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.LeadUpsertWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        update: z.union([z.lazy(() => LeadUpdateWithoutProjectInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutProjectInputSchema)]),
        create: z.union([z.lazy(() => LeadCreateWithoutProjectInputSchema), z.lazy(() => LeadUncheckedCreateWithoutProjectInputSchema)])
    })
    .strict()

export default LeadUpsertWithWhereUniqueWithoutProjectInputSchema
