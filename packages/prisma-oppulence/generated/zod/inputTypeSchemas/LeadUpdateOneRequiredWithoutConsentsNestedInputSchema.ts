import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutConsentsInputSchema } from './LeadCreateWithoutConsentsInputSchema'
import { LeadUncheckedCreateWithoutConsentsInputSchema } from './LeadUncheckedCreateWithoutConsentsInputSchema'
import { LeadCreateOrConnectWithoutConsentsInputSchema } from './LeadCreateOrConnectWithoutConsentsInputSchema'
import { LeadUpsertWithoutConsentsInputSchema } from './LeadUpsertWithoutConsentsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateToOneWithWhereWithoutConsentsInputSchema } from './LeadUpdateToOneWithWhereWithoutConsentsInputSchema'
import { LeadUpdateWithoutConsentsInputSchema } from './LeadUpdateWithoutConsentsInputSchema'
import { LeadUncheckedUpdateWithoutConsentsInputSchema } from './LeadUncheckedUpdateWithoutConsentsInputSchema'

export const LeadUpdateOneRequiredWithoutConsentsNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutConsentsNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => LeadCreateWithoutConsentsInputSchema), z.lazy(() => LeadUncheckedCreateWithoutConsentsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutConsentsInputSchema).optional(),
        upsert: z.lazy(() => LeadUpsertWithoutConsentsInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => LeadUpdateToOneWithWhereWithoutConsentsInputSchema),
                z.lazy(() => LeadUpdateWithoutConsentsInputSchema),
                z.lazy(() => LeadUncheckedUpdateWithoutConsentsInputSchema)
            ])
            .optional()
    })
    .strict()

export default LeadUpdateOneRequiredWithoutConsentsNestedInputSchema
