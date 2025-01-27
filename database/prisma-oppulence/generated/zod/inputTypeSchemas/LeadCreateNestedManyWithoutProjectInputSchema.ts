import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutProjectInputSchema } from './LeadCreateWithoutProjectInputSchema'
import { LeadUncheckedCreateWithoutProjectInputSchema } from './LeadUncheckedCreateWithoutProjectInputSchema'
import { LeadCreateOrConnectWithoutProjectInputSchema } from './LeadCreateOrConnectWithoutProjectInputSchema'
import { LeadCreateManyProjectInputEnvelopeSchema } from './LeadCreateManyProjectInputEnvelopeSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.LeadCreateNestedManyWithoutProjectInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutProjectInputSchema),
                z.lazy(() => LeadCreateWithoutProjectInputSchema).array(),
                z.lazy(() => LeadUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => LeadCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadCreateManyProjectInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default LeadCreateNestedManyWithoutProjectInputSchema
