import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateWithoutActivitiesInputSchema } from './DealCreateWithoutActivitiesInputSchema'
import { DealUncheckedCreateWithoutActivitiesInputSchema } from './DealUncheckedCreateWithoutActivitiesInputSchema'
import { DealCreateOrConnectWithoutActivitiesInputSchema } from './DealCreateOrConnectWithoutActivitiesInputSchema'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'

export const DealCreateNestedOneWithoutActivitiesInputSchema: z.ZodType<Prisma.DealCreateNestedOneWithoutActivitiesInput> = z
    .object({
        create: z
            .union([z.lazy(() => DealCreateWithoutActivitiesInputSchema), z.lazy(() => DealUncheckedCreateWithoutActivitiesInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutActivitiesInputSchema).optional(),
        connect: z.lazy(() => DealWhereUniqueInputSchema).optional()
    })
    .strict()

export default DealCreateNestedOneWithoutActivitiesInputSchema
