import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateWithoutAttachmentsInputSchema } from './DealUpdateWithoutAttachmentsInputSchema'
import { DealUncheckedUpdateWithoutAttachmentsInputSchema } from './DealUncheckedUpdateWithoutAttachmentsInputSchema'
import { DealCreateWithoutAttachmentsInputSchema } from './DealCreateWithoutAttachmentsInputSchema'
import { DealUncheckedCreateWithoutAttachmentsInputSchema } from './DealUncheckedCreateWithoutAttachmentsInputSchema'

export const DealUpsertWithWhereUniqueWithoutAttachmentsInputSchema: z.ZodType<Prisma.DealUpsertWithWhereUniqueWithoutAttachmentsInput> = z
    .object({
        where: z.lazy(() => DealWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => DealUpdateWithoutAttachmentsInputSchema),
            z.lazy(() => DealUncheckedUpdateWithoutAttachmentsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => DealCreateWithoutAttachmentsInputSchema),
            z.lazy(() => DealUncheckedCreateWithoutAttachmentsInputSchema)
        ])
    })
    .strict()

export default DealUpsertWithWhereUniqueWithoutAttachmentsInputSchema
