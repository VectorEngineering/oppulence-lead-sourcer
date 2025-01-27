import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutAssignedToInputSchema } from './LeadCreateWithoutAssignedToInputSchema'
import { LeadUncheckedCreateWithoutAssignedToInputSchema } from './LeadUncheckedCreateWithoutAssignedToInputSchema'
import { LeadCreateOrConnectWithoutAssignedToInputSchema } from './LeadCreateOrConnectWithoutAssignedToInputSchema'
import { LeadCreateManyAssignedToInputEnvelopeSchema } from './LeadCreateManyAssignedToInputEnvelopeSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedManyWithoutAssignedToInputSchema: z.ZodType<Prisma.LeadCreateNestedManyWithoutAssignedToInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutAssignedToInputSchema),
                z.lazy(() => LeadCreateWithoutAssignedToInputSchema).array(),
                z.lazy(() => LeadUncheckedCreateWithoutAssignedToInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadCreateOrConnectWithoutAssignedToInputSchema),
                z.lazy(() => LeadCreateOrConnectWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadCreateManyAssignedToInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default LeadCreateNestedManyWithoutAssignedToInputSchema
