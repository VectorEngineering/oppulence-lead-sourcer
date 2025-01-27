import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadUpdateWithoutConsentsInputSchema } from './LeadUpdateWithoutConsentsInputSchema'
import { LeadUncheckedUpdateWithoutConsentsInputSchema } from './LeadUncheckedUpdateWithoutConsentsInputSchema'
import { LeadCreateWithoutConsentsInputSchema } from './LeadCreateWithoutConsentsInputSchema'
import { LeadUncheckedCreateWithoutConsentsInputSchema } from './LeadUncheckedCreateWithoutConsentsInputSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadUpsertWithoutConsentsInputSchema: z.ZodType<Prisma.LeadUpsertWithoutConsentsInput> = z
    .object({
        update: z.union([z.lazy(() => LeadUpdateWithoutConsentsInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutConsentsInputSchema)]),
        create: z.union([z.lazy(() => LeadCreateWithoutConsentsInputSchema), z.lazy(() => LeadUncheckedCreateWithoutConsentsInputSchema)]),
        where: z.lazy(() => LeadWhereInputSchema).optional()
    })
    .strict()

export default LeadUpsertWithoutConsentsInputSchema
