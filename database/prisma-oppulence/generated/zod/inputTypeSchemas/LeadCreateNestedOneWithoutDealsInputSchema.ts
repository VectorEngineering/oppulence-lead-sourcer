import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutDealsInputSchema } from './LeadCreateWithoutDealsInputSchema'
import { LeadUncheckedCreateWithoutDealsInputSchema } from './LeadUncheckedCreateWithoutDealsInputSchema'
import { LeadCreateOrConnectWithoutDealsInputSchema } from './LeadCreateOrConnectWithoutDealsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedOneWithoutDealsInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutDealsInput> = z
    .object({
        create: z
            .union([z.lazy(() => LeadCreateWithoutDealsInputSchema), z.lazy(() => LeadUncheckedCreateWithoutDealsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutDealsInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
    })
    .strict()

export default LeadCreateNestedOneWithoutDealsInputSchema
