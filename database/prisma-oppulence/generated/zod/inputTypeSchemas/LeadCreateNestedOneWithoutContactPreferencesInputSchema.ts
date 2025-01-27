import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutContactPreferencesInputSchema } from './LeadCreateWithoutContactPreferencesInputSchema'
import { LeadUncheckedCreateWithoutContactPreferencesInputSchema } from './LeadUncheckedCreateWithoutContactPreferencesInputSchema'
import { LeadCreateOrConnectWithoutContactPreferencesInputSchema } from './LeadCreateOrConnectWithoutContactPreferencesInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedOneWithoutContactPreferencesInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutContactPreferencesInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCreateWithoutContactPreferencesInputSchema),
                    z.lazy(() => LeadUncheckedCreateWithoutContactPreferencesInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutContactPreferencesInputSchema).optional(),
            connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
        })
        .strict()

export default LeadCreateNestedOneWithoutContactPreferencesInputSchema
