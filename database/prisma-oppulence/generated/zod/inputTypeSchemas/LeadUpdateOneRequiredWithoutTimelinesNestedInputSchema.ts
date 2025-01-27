import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutTimelinesInputSchema } from './LeadCreateWithoutTimelinesInputSchema'
import { LeadUncheckedCreateWithoutTimelinesInputSchema } from './LeadUncheckedCreateWithoutTimelinesInputSchema'
import { LeadCreateOrConnectWithoutTimelinesInputSchema } from './LeadCreateOrConnectWithoutTimelinesInputSchema'
import { LeadUpsertWithoutTimelinesInputSchema } from './LeadUpsertWithoutTimelinesInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateToOneWithWhereWithoutTimelinesInputSchema } from './LeadUpdateToOneWithWhereWithoutTimelinesInputSchema'
import { LeadUpdateWithoutTimelinesInputSchema } from './LeadUpdateWithoutTimelinesInputSchema'
import { LeadUncheckedUpdateWithoutTimelinesInputSchema } from './LeadUncheckedUpdateWithoutTimelinesInputSchema'

export const LeadUpdateOneRequiredWithoutTimelinesNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutTimelinesNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => LeadCreateWithoutTimelinesInputSchema), z.lazy(() => LeadUncheckedCreateWithoutTimelinesInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutTimelinesInputSchema).optional(),
        upsert: z.lazy(() => LeadUpsertWithoutTimelinesInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => LeadUpdateToOneWithWhereWithoutTimelinesInputSchema),
                z.lazy(() => LeadUpdateWithoutTimelinesInputSchema),
                z.lazy(() => LeadUncheckedUpdateWithoutTimelinesInputSchema)
            ])
            .optional()
    })
    .strict()

export default LeadUpdateOneRequiredWithoutTimelinesNestedInputSchema
