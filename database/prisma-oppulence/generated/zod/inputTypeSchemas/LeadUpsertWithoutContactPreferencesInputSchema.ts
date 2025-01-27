import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadUpdateWithoutContactPreferencesInputSchema } from './LeadUpdateWithoutContactPreferencesInputSchema'
import { LeadUncheckedUpdateWithoutContactPreferencesInputSchema } from './LeadUncheckedUpdateWithoutContactPreferencesInputSchema'
import { LeadCreateWithoutContactPreferencesInputSchema } from './LeadCreateWithoutContactPreferencesInputSchema'
import { LeadUncheckedCreateWithoutContactPreferencesInputSchema } from './LeadUncheckedCreateWithoutContactPreferencesInputSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadUpsertWithoutContactPreferencesInputSchema: z.ZodType<Prisma.LeadUpsertWithoutContactPreferencesInput> = z
    .object({
        update: z.union([
            z.lazy(() => LeadUpdateWithoutContactPreferencesInputSchema),
            z.lazy(() => LeadUncheckedUpdateWithoutContactPreferencesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LeadCreateWithoutContactPreferencesInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutContactPreferencesInputSchema)
        ]),
        where: z.lazy(() => LeadWhereInputSchema).optional()
    })
    .strict()

export default LeadUpsertWithoutContactPreferencesInputSchema
