import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateWithoutAssignedToInputSchema } from './DealUpdateWithoutAssignedToInputSchema'
import { DealUncheckedUpdateWithoutAssignedToInputSchema } from './DealUncheckedUpdateWithoutAssignedToInputSchema'
import { DealCreateWithoutAssignedToInputSchema } from './DealCreateWithoutAssignedToInputSchema'
import { DealUncheckedCreateWithoutAssignedToInputSchema } from './DealUncheckedCreateWithoutAssignedToInputSchema'

export const DealUpsertWithWhereUniqueWithoutAssignedToInputSchema: z.ZodType<Prisma.DealUpsertWithWhereUniqueWithoutAssignedToInput> = z
    .object({
        where: z.lazy(() => DealWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => DealUpdateWithoutAssignedToInputSchema),
            z.lazy(() => DealUncheckedUpdateWithoutAssignedToInputSchema)
        ]),
        create: z.union([
            z.lazy(() => DealCreateWithoutAssignedToInputSchema),
            z.lazy(() => DealUncheckedCreateWithoutAssignedToInputSchema)
        ])
    })
    .strict()

export default DealUpsertWithWhereUniqueWithoutAssignedToInputSchema
