import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompanyDetailsCreateWithoutLeadInputSchema } from './LeadCompanyDetailsCreateWithoutLeadInputSchema'
import { LeadCompanyDetailsUncheckedCreateWithoutLeadInputSchema } from './LeadCompanyDetailsUncheckedCreateWithoutLeadInputSchema'
import { LeadCompanyDetailsCreateOrConnectWithoutLeadInputSchema } from './LeadCompanyDetailsCreateOrConnectWithoutLeadInputSchema'
import { LeadCompanyDetailsWhereUniqueInputSchema } from './LeadCompanyDetailsWhereUniqueInputSchema'

export const LeadCompanyDetailsUncheckedCreateNestedOneWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompanyDetailsUncheckedCreateNestedOneWithoutLeadInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCompanyDetailsCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadCompanyDetailsUncheckedCreateWithoutLeadInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadCompanyDetailsCreateOrConnectWithoutLeadInputSchema).optional(),
            connect: z.lazy(() => LeadCompanyDetailsWhereUniqueInputSchema).optional()
        })
        .strict()

export default LeadCompanyDetailsUncheckedCreateNestedOneWithoutLeadInputSchema
