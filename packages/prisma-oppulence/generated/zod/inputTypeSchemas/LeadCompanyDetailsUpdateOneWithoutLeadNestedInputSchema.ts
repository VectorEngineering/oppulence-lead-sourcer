import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompanyDetailsCreateWithoutLeadInputSchema } from './LeadCompanyDetailsCreateWithoutLeadInputSchema'
import { LeadCompanyDetailsUncheckedCreateWithoutLeadInputSchema } from './LeadCompanyDetailsUncheckedCreateWithoutLeadInputSchema'
import { LeadCompanyDetailsCreateOrConnectWithoutLeadInputSchema } from './LeadCompanyDetailsCreateOrConnectWithoutLeadInputSchema'
import { LeadCompanyDetailsUpsertWithoutLeadInputSchema } from './LeadCompanyDetailsUpsertWithoutLeadInputSchema'
import { LeadCompanyDetailsWhereInputSchema } from './LeadCompanyDetailsWhereInputSchema'
import { LeadCompanyDetailsWhereUniqueInputSchema } from './LeadCompanyDetailsWhereUniqueInputSchema'
import { LeadCompanyDetailsUpdateToOneWithWhereWithoutLeadInputSchema } from './LeadCompanyDetailsUpdateToOneWithWhereWithoutLeadInputSchema'
import { LeadCompanyDetailsUpdateWithoutLeadInputSchema } from './LeadCompanyDetailsUpdateWithoutLeadInputSchema'
import { LeadCompanyDetailsUncheckedUpdateWithoutLeadInputSchema } from './LeadCompanyDetailsUncheckedUpdateWithoutLeadInputSchema'

export const LeadCompanyDetailsUpdateOneWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadCompanyDetailsUpdateOneWithoutLeadNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCompanyDetailsCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadCompanyDetailsUncheckedCreateWithoutLeadInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadCompanyDetailsCreateOrConnectWithoutLeadInputSchema).optional(),
            upsert: z.lazy(() => LeadCompanyDetailsUpsertWithoutLeadInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => LeadCompanyDetailsWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => LeadCompanyDetailsWhereInputSchema)]).optional(),
            connect: z.lazy(() => LeadCompanyDetailsWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => LeadCompanyDetailsUpdateToOneWithWhereWithoutLeadInputSchema),
                    z.lazy(() => LeadCompanyDetailsUpdateWithoutLeadInputSchema),
                    z.lazy(() => LeadCompanyDetailsUncheckedUpdateWithoutLeadInputSchema)
                ])
                .optional()
        })
        .strict()

export default LeadCompanyDetailsUpdateOneWithoutLeadNestedInputSchema
