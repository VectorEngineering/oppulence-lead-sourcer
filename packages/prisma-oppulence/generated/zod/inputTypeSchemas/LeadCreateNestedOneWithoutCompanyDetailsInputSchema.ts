import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutCompanyDetailsInputSchema } from './LeadCreateWithoutCompanyDetailsInputSchema'
import { LeadUncheckedCreateWithoutCompanyDetailsInputSchema } from './LeadUncheckedCreateWithoutCompanyDetailsInputSchema'
import { LeadCreateOrConnectWithoutCompanyDetailsInputSchema } from './LeadCreateOrConnectWithoutCompanyDetailsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedOneWithoutCompanyDetailsInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutCompanyDetailsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutCompanyDetailsInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutCompanyDetailsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutCompanyDetailsInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
    })
    .strict()

export default LeadCreateNestedOneWithoutCompanyDetailsInputSchema
