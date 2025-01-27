import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutHistoryInputSchema } from './LeadCreateWithoutHistoryInputSchema'
import { LeadUncheckedCreateWithoutHistoryInputSchema } from './LeadUncheckedCreateWithoutHistoryInputSchema'
import { LeadCreateOrConnectWithoutHistoryInputSchema } from './LeadCreateOrConnectWithoutHistoryInputSchema'
import { LeadUpsertWithoutHistoryInputSchema } from './LeadUpsertWithoutHistoryInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateToOneWithWhereWithoutHistoryInputSchema } from './LeadUpdateToOneWithWhereWithoutHistoryInputSchema'
import { LeadUpdateWithoutHistoryInputSchema } from './LeadUpdateWithoutHistoryInputSchema'
import { LeadUncheckedUpdateWithoutHistoryInputSchema } from './LeadUncheckedUpdateWithoutHistoryInputSchema'

export const LeadUpdateOneRequiredWithoutHistoryNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutHistoryNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => LeadCreateWithoutHistoryInputSchema), z.lazy(() => LeadUncheckedCreateWithoutHistoryInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutHistoryInputSchema).optional(),
        upsert: z.lazy(() => LeadUpsertWithoutHistoryInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => LeadUpdateToOneWithWhereWithoutHistoryInputSchema),
                z.lazy(() => LeadUpdateWithoutHistoryInputSchema),
                z.lazy(() => LeadUncheckedUpdateWithoutHistoryInputSchema)
            ])
            .optional()
    })
    .strict()

export default LeadUpdateOneRequiredWithoutHistoryNestedInputSchema
