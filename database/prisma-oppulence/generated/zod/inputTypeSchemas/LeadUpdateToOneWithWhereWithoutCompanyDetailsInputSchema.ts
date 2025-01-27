import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutCompanyDetailsInputSchema } from './LeadUpdateWithoutCompanyDetailsInputSchema'
import { LeadUncheckedUpdateWithoutCompanyDetailsInputSchema } from './LeadUncheckedUpdateWithoutCompanyDetailsInputSchema'

export const LeadUpdateToOneWithWhereWithoutCompanyDetailsInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutCompanyDetailsInput> =
    z
        .object({
            where: z.lazy(() => LeadWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => LeadUpdateWithoutCompanyDetailsInputSchema),
                z.lazy(() => LeadUncheckedUpdateWithoutCompanyDetailsInputSchema)
            ])
        })
        .strict()

export default LeadUpdateToOneWithWhereWithoutCompanyDetailsInputSchema
