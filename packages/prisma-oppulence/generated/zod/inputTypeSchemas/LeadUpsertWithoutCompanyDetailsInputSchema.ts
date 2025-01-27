import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadUpdateWithoutCompanyDetailsInputSchema } from './LeadUpdateWithoutCompanyDetailsInputSchema'
import { LeadUncheckedUpdateWithoutCompanyDetailsInputSchema } from './LeadUncheckedUpdateWithoutCompanyDetailsInputSchema'
import { LeadCreateWithoutCompanyDetailsInputSchema } from './LeadCreateWithoutCompanyDetailsInputSchema'
import { LeadUncheckedCreateWithoutCompanyDetailsInputSchema } from './LeadUncheckedCreateWithoutCompanyDetailsInputSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadUpsertWithoutCompanyDetailsInputSchema: z.ZodType<Prisma.LeadUpsertWithoutCompanyDetailsInput> = z
    .object({
        update: z.union([
            z.lazy(() => LeadUpdateWithoutCompanyDetailsInputSchema),
            z.lazy(() => LeadUncheckedUpdateWithoutCompanyDetailsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LeadCreateWithoutCompanyDetailsInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutCompanyDetailsInputSchema)
        ]),
        where: z.lazy(() => LeadWhereInputSchema).optional()
    })
    .strict()

export default LeadUpsertWithoutCompanyDetailsInputSchema
