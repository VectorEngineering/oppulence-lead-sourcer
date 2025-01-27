import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateWithoutTasksInputSchema } from './DealCreateWithoutTasksInputSchema'
import { DealUncheckedCreateWithoutTasksInputSchema } from './DealUncheckedCreateWithoutTasksInputSchema'
import { DealCreateOrConnectWithoutTasksInputSchema } from './DealCreateOrConnectWithoutTasksInputSchema'
import { DealUpsertWithoutTasksInputSchema } from './DealUpsertWithoutTasksInputSchema'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateToOneWithWhereWithoutTasksInputSchema } from './DealUpdateToOneWithWhereWithoutTasksInputSchema'
import { DealUpdateWithoutTasksInputSchema } from './DealUpdateWithoutTasksInputSchema'
import { DealUncheckedUpdateWithoutTasksInputSchema } from './DealUncheckedUpdateWithoutTasksInputSchema'

export const DealUpdateOneRequiredWithoutTasksNestedInputSchema: z.ZodType<Prisma.DealUpdateOneRequiredWithoutTasksNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => DealCreateWithoutTasksInputSchema), z.lazy(() => DealUncheckedCreateWithoutTasksInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutTasksInputSchema).optional(),
        upsert: z.lazy(() => DealUpsertWithoutTasksInputSchema).optional(),
        connect: z.lazy(() => DealWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => DealUpdateToOneWithWhereWithoutTasksInputSchema),
                z.lazy(() => DealUpdateWithoutTasksInputSchema),
                z.lazy(() => DealUncheckedUpdateWithoutTasksInputSchema)
            ])
            .optional()
    })
    .strict()

export default DealUpdateOneRequiredWithoutTasksNestedInputSchema
