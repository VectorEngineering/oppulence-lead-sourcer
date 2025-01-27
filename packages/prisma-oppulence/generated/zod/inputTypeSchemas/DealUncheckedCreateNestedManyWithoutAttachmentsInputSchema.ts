import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateWithoutAttachmentsInputSchema } from './DealCreateWithoutAttachmentsInputSchema'
import { DealUncheckedCreateWithoutAttachmentsInputSchema } from './DealUncheckedCreateWithoutAttachmentsInputSchema'
import { DealCreateOrConnectWithoutAttachmentsInputSchema } from './DealCreateOrConnectWithoutAttachmentsInputSchema'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'

export const DealUncheckedCreateNestedManyWithoutAttachmentsInputSchema: z.ZodType<Prisma.DealUncheckedCreateNestedManyWithoutAttachmentsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => DealCreateWithoutAttachmentsInputSchema),
                    z.lazy(() => DealCreateWithoutAttachmentsInputSchema).array(),
                    z.lazy(() => DealUncheckedCreateWithoutAttachmentsInputSchema),
                    z.lazy(() => DealUncheckedCreateWithoutAttachmentsInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => DealCreateOrConnectWithoutAttachmentsInputSchema),
                    z.lazy(() => DealCreateOrConnectWithoutAttachmentsInputSchema).array()
                ])
                .optional(),
            connect: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional()
        })
        .strict()

export default DealUncheckedCreateNestedManyWithoutAttachmentsInputSchema
