import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutRequirementsInputSchema } from './LeadCreateWithoutRequirementsInputSchema'
import { LeadUncheckedCreateWithoutRequirementsInputSchema } from './LeadUncheckedCreateWithoutRequirementsInputSchema'
import { LeadCreateOrConnectWithoutRequirementsInputSchema } from './LeadCreateOrConnectWithoutRequirementsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedOneWithoutRequirementsInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutRequirementsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutRequirementsInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutRequirementsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutRequirementsInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
    })
    .strict()

export default LeadCreateNestedOneWithoutRequirementsInputSchema
