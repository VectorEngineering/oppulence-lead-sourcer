import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutLeadScoreInputSchema } from './LeadCreateWithoutLeadScoreInputSchema'
import { LeadUncheckedCreateWithoutLeadScoreInputSchema } from './LeadUncheckedCreateWithoutLeadScoreInputSchema'
import { LeadCreateOrConnectWithoutLeadScoreInputSchema } from './LeadCreateOrConnectWithoutLeadScoreInputSchema'
import { LeadUpsertWithoutLeadScoreInputSchema } from './LeadUpsertWithoutLeadScoreInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateToOneWithWhereWithoutLeadScoreInputSchema } from './LeadUpdateToOneWithWhereWithoutLeadScoreInputSchema'
import { LeadUpdateWithoutLeadScoreInputSchema } from './LeadUpdateWithoutLeadScoreInputSchema'
import { LeadUncheckedUpdateWithoutLeadScoreInputSchema } from './LeadUncheckedUpdateWithoutLeadScoreInputSchema'

export const LeadUpdateOneRequiredWithoutLeadScoreNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutLeadScoreNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => LeadCreateWithoutLeadScoreInputSchema), z.lazy(() => LeadUncheckedCreateWithoutLeadScoreInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadScoreInputSchema).optional(),
        upsert: z.lazy(() => LeadUpsertWithoutLeadScoreInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => LeadUpdateToOneWithWhereWithoutLeadScoreInputSchema),
                z.lazy(() => LeadUpdateWithoutLeadScoreInputSchema),
                z.lazy(() => LeadUncheckedUpdateWithoutLeadScoreInputSchema)
            ])
            .optional()
    })
    .strict()

export default LeadUpdateOneRequiredWithoutLeadScoreNestedInputSchema
