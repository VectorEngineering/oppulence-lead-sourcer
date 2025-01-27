import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealCreateWithoutAttachmentsInputSchema } from './DealCreateWithoutAttachmentsInputSchema'
import { DealUncheckedCreateWithoutAttachmentsInputSchema } from './DealUncheckedCreateWithoutAttachmentsInputSchema'

export const DealCreateOrConnectWithoutAttachmentsInputSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutAttachmentsInput> = z
    .object({
        where: z.lazy(() => DealWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => DealCreateWithoutAttachmentsInputSchema),
            z.lazy(() => DealUncheckedCreateWithoutAttachmentsInputSchema)
        ])
    })
    .strict()

export default DealCreateOrConnectWithoutAttachmentsInputSchema
