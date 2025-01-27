import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskWhereUniqueInputSchema } from './DealTaskWhereUniqueInputSchema'
import { DealTaskUpdateWithoutAssignedToInputSchema } from './DealTaskUpdateWithoutAssignedToInputSchema'
import { DealTaskUncheckedUpdateWithoutAssignedToInputSchema } from './DealTaskUncheckedUpdateWithoutAssignedToInputSchema'
import { DealTaskCreateWithoutAssignedToInputSchema } from './DealTaskCreateWithoutAssignedToInputSchema'
import { DealTaskUncheckedCreateWithoutAssignedToInputSchema } from './DealTaskUncheckedCreateWithoutAssignedToInputSchema'

export const DealTaskUpsertWithWhereUniqueWithoutAssignedToInputSchema: z.ZodType<Prisma.DealTaskUpsertWithWhereUniqueWithoutAssignedToInput> =
    z
        .object({
            where: z.lazy(() => DealTaskWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => DealTaskUpdateWithoutAssignedToInputSchema),
                z.lazy(() => DealTaskUncheckedUpdateWithoutAssignedToInputSchema)
            ]),
            create: z.union([
                z.lazy(() => DealTaskCreateWithoutAssignedToInputSchema),
                z.lazy(() => DealTaskUncheckedCreateWithoutAssignedToInputSchema)
            ])
        })
        .strict()

export default DealTaskUpsertWithWhereUniqueWithoutAssignedToInputSchema
