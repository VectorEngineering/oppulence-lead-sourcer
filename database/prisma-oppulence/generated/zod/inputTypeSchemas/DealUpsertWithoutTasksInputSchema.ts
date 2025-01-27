import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealUpdateWithoutTasksInputSchema } from './DealUpdateWithoutTasksInputSchema'
import { DealUncheckedUpdateWithoutTasksInputSchema } from './DealUncheckedUpdateWithoutTasksInputSchema'
import { DealCreateWithoutTasksInputSchema } from './DealCreateWithoutTasksInputSchema'
import { DealUncheckedCreateWithoutTasksInputSchema } from './DealUncheckedCreateWithoutTasksInputSchema'
import { DealWhereInputSchema } from './DealWhereInputSchema'

export const DealUpsertWithoutTasksInputSchema: z.ZodType<Prisma.DealUpsertWithoutTasksInput> = z
    .object({
        update: z.union([z.lazy(() => DealUpdateWithoutTasksInputSchema), z.lazy(() => DealUncheckedUpdateWithoutTasksInputSchema)]),
        create: z.union([z.lazy(() => DealCreateWithoutTasksInputSchema), z.lazy(() => DealUncheckedCreateWithoutTasksInputSchema)]),
        where: z.lazy(() => DealWhereInputSchema).optional()
    })
    .strict()

export default DealUpsertWithoutTasksInputSchema
