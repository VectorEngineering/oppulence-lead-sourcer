import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateWithoutActivitiesInputSchema } from './DealCreateWithoutActivitiesInputSchema'
import { DealUncheckedCreateWithoutActivitiesInputSchema } from './DealUncheckedCreateWithoutActivitiesInputSchema'
import { DealCreateOrConnectWithoutActivitiesInputSchema } from './DealCreateOrConnectWithoutActivitiesInputSchema'
import { DealUpsertWithoutActivitiesInputSchema } from './DealUpsertWithoutActivitiesInputSchema'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateToOneWithWhereWithoutActivitiesInputSchema } from './DealUpdateToOneWithWhereWithoutActivitiesInputSchema'
import { DealUpdateWithoutActivitiesInputSchema } from './DealUpdateWithoutActivitiesInputSchema'
import { DealUncheckedUpdateWithoutActivitiesInputSchema } from './DealUncheckedUpdateWithoutActivitiesInputSchema'

export const DealUpdateOneRequiredWithoutActivitiesNestedInputSchema: z.ZodType<Prisma.DealUpdateOneRequiredWithoutActivitiesNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => DealCreateWithoutActivitiesInputSchema),
                    z.lazy(() => DealUncheckedCreateWithoutActivitiesInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutActivitiesInputSchema).optional(),
            upsert: z.lazy(() => DealUpsertWithoutActivitiesInputSchema).optional(),
            connect: z.lazy(() => DealWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => DealUpdateToOneWithWhereWithoutActivitiesInputSchema),
                    z.lazy(() => DealUpdateWithoutActivitiesInputSchema),
                    z.lazy(() => DealUncheckedUpdateWithoutActivitiesInputSchema)
                ])
                .optional()
        })
        .strict()

export default DealUpdateOneRequiredWithoutActivitiesNestedInputSchema
