import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskWhereUniqueInputSchema } from './DealTaskWhereUniqueInputSchema'
import { DealTaskCreateWithoutAssignedToInputSchema } from './DealTaskCreateWithoutAssignedToInputSchema'
import { DealTaskUncheckedCreateWithoutAssignedToInputSchema } from './DealTaskUncheckedCreateWithoutAssignedToInputSchema'

export const DealTaskCreateOrConnectWithoutAssignedToInputSchema: z.ZodType<Prisma.DealTaskCreateOrConnectWithoutAssignedToInput> = z
    .object({
        where: z.lazy(() => DealTaskWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => DealTaskCreateWithoutAssignedToInputSchema),
            z.lazy(() => DealTaskUncheckedCreateWithoutAssignedToInputSchema)
        ])
    })
    .strict()

export default DealTaskCreateOrConnectWithoutAssignedToInputSchema
