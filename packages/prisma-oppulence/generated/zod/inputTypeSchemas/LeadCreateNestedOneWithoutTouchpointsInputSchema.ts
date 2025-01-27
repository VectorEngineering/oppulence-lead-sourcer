import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutTouchpointsInputSchema } from './LeadCreateWithoutTouchpointsInputSchema'
import { LeadUncheckedCreateWithoutTouchpointsInputSchema } from './LeadUncheckedCreateWithoutTouchpointsInputSchema'
import { LeadCreateOrConnectWithoutTouchpointsInputSchema } from './LeadCreateOrConnectWithoutTouchpointsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedOneWithoutTouchpointsInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutTouchpointsInput> = z
    .object({
        create: z
            .union([z.lazy(() => LeadCreateWithoutTouchpointsInputSchema), z.lazy(() => LeadUncheckedCreateWithoutTouchpointsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutTouchpointsInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
    })
    .strict()

export default LeadCreateNestedOneWithoutTouchpointsInputSchema
