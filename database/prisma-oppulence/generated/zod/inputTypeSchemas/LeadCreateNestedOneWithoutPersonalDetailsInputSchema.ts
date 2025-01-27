import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutPersonalDetailsInputSchema } from './LeadCreateWithoutPersonalDetailsInputSchema'
import { LeadUncheckedCreateWithoutPersonalDetailsInputSchema } from './LeadUncheckedCreateWithoutPersonalDetailsInputSchema'
import { LeadCreateOrConnectWithoutPersonalDetailsInputSchema } from './LeadCreateOrConnectWithoutPersonalDetailsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedOneWithoutPersonalDetailsInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutPersonalDetailsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutPersonalDetailsInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutPersonalDetailsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutPersonalDetailsInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
    })
    .strict()

export default LeadCreateNestedOneWithoutPersonalDetailsInputSchema
