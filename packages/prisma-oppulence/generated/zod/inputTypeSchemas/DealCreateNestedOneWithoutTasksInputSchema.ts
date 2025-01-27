import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateWithoutTasksInputSchema } from './DealCreateWithoutTasksInputSchema'
import { DealUncheckedCreateWithoutTasksInputSchema } from './DealUncheckedCreateWithoutTasksInputSchema'
import { DealCreateOrConnectWithoutTasksInputSchema } from './DealCreateOrConnectWithoutTasksInputSchema'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'

export const DealCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.DealCreateNestedOneWithoutTasksInput> = z
    .object({
        create: z
            .union([z.lazy(() => DealCreateWithoutTasksInputSchema), z.lazy(() => DealUncheckedCreateWithoutTasksInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutTasksInputSchema).optional(),
        connect: z.lazy(() => DealWhereUniqueInputSchema).optional()
    })
    .strict()

export default DealCreateNestedOneWithoutTasksInputSchema
