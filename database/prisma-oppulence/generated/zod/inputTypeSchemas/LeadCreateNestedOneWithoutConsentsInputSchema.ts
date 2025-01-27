import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutConsentsInputSchema } from './LeadCreateWithoutConsentsInputSchema'
import { LeadUncheckedCreateWithoutConsentsInputSchema } from './LeadUncheckedCreateWithoutConsentsInputSchema'
import { LeadCreateOrConnectWithoutConsentsInputSchema } from './LeadCreateOrConnectWithoutConsentsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedOneWithoutConsentsInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutConsentsInput> = z
    .object({
        create: z
            .union([z.lazy(() => LeadCreateWithoutConsentsInputSchema), z.lazy(() => LeadUncheckedCreateWithoutConsentsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutConsentsInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
    })
    .strict()

export default LeadCreateNestedOneWithoutConsentsInputSchema
