import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutCommunicationsInputSchema } from './LeadCreateWithoutCommunicationsInputSchema'
import { LeadUncheckedCreateWithoutCommunicationsInputSchema } from './LeadUncheckedCreateWithoutCommunicationsInputSchema'
import { LeadCreateOrConnectWithoutCommunicationsInputSchema } from './LeadCreateOrConnectWithoutCommunicationsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedOneWithoutCommunicationsInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutCommunicationsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutCommunicationsInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutCommunicationsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutCommunicationsInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
    })
    .strict()

export default LeadCreateNestedOneWithoutCommunicationsInputSchema
