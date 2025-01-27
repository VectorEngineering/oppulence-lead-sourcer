import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutCompanyDetailsInputSchema } from './LeadCreateWithoutCompanyDetailsInputSchema'
import { LeadUncheckedCreateWithoutCompanyDetailsInputSchema } from './LeadUncheckedCreateWithoutCompanyDetailsInputSchema'
import { LeadCreateOrConnectWithoutCompanyDetailsInputSchema } from './LeadCreateOrConnectWithoutCompanyDetailsInputSchema'
import { LeadUpsertWithoutCompanyDetailsInputSchema } from './LeadUpsertWithoutCompanyDetailsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateToOneWithWhereWithoutCompanyDetailsInputSchema } from './LeadUpdateToOneWithWhereWithoutCompanyDetailsInputSchema'
import { LeadUpdateWithoutCompanyDetailsInputSchema } from './LeadUpdateWithoutCompanyDetailsInputSchema'
import { LeadUncheckedUpdateWithoutCompanyDetailsInputSchema } from './LeadUncheckedUpdateWithoutCompanyDetailsInputSchema'

export const LeadUpdateOneRequiredWithoutCompanyDetailsNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutCompanyDetailsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCreateWithoutCompanyDetailsInputSchema),
                    z.lazy(() => LeadUncheckedCreateWithoutCompanyDetailsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutCompanyDetailsInputSchema).optional(),
            upsert: z.lazy(() => LeadUpsertWithoutCompanyDetailsInputSchema).optional(),
            connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => LeadUpdateToOneWithWhereWithoutCompanyDetailsInputSchema),
                    z.lazy(() => LeadUpdateWithoutCompanyDetailsInputSchema),
                    z.lazy(() => LeadUncheckedUpdateWithoutCompanyDetailsInputSchema)
                ])
                .optional()
        })
        .strict()

export default LeadUpdateOneRequiredWithoutCompanyDetailsNestedInputSchema
