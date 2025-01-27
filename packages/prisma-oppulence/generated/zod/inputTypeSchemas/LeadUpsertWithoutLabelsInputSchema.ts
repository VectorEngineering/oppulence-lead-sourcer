import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadUpdateWithoutLabelsInputSchema } from './LeadUpdateWithoutLabelsInputSchema'
import { LeadUncheckedUpdateWithoutLabelsInputSchema } from './LeadUncheckedUpdateWithoutLabelsInputSchema'
import { LeadCreateWithoutLabelsInputSchema } from './LeadCreateWithoutLabelsInputSchema'
import { LeadUncheckedCreateWithoutLabelsInputSchema } from './LeadUncheckedCreateWithoutLabelsInputSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadUpsertWithoutLabelsInputSchema: z.ZodType<Prisma.LeadUpsertWithoutLabelsInput> = z
    .object({
        update: z.union([z.lazy(() => LeadUpdateWithoutLabelsInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutLabelsInputSchema)]),
        create: z.union([z.lazy(() => LeadCreateWithoutLabelsInputSchema), z.lazy(() => LeadUncheckedCreateWithoutLabelsInputSchema)]),
        where: z.lazy(() => LeadWhereInputSchema).optional()
    })
    .strict()

export default LeadUpsertWithoutLabelsInputSchema
