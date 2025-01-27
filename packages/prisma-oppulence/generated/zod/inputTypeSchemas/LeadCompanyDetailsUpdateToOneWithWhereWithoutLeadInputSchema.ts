import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompanyDetailsWhereInputSchema } from './LeadCompanyDetailsWhereInputSchema'
import { LeadCompanyDetailsUpdateWithoutLeadInputSchema } from './LeadCompanyDetailsUpdateWithoutLeadInputSchema'
import { LeadCompanyDetailsUncheckedUpdateWithoutLeadInputSchema } from './LeadCompanyDetailsUncheckedUpdateWithoutLeadInputSchema'

export const LeadCompanyDetailsUpdateToOneWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompanyDetailsUpdateToOneWithWhereWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadCompanyDetailsWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => LeadCompanyDetailsUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadCompanyDetailsUncheckedUpdateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadCompanyDetailsUpdateToOneWithWhereWithoutLeadInputSchema
