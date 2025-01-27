import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskCreateWithoutAssignedToInputSchema } from './LeadTaskCreateWithoutAssignedToInputSchema'
import { LeadTaskUncheckedCreateWithoutAssignedToInputSchema } from './LeadTaskUncheckedCreateWithoutAssignedToInputSchema'
import { LeadTaskCreateOrConnectWithoutAssignedToInputSchema } from './LeadTaskCreateOrConnectWithoutAssignedToInputSchema'
import { LeadTaskCreateManyAssignedToInputEnvelopeSchema } from './LeadTaskCreateManyAssignedToInputEnvelopeSchema'
import { LeadTaskWhereUniqueInputSchema } from './LeadTaskWhereUniqueInputSchema'

export const LeadTaskCreateNestedManyWithoutAssignedToInputSchema: z.ZodType<Prisma.LeadTaskCreateNestedManyWithoutAssignedToInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadTaskCreateWithoutAssignedToInputSchema),
                z.lazy(() => LeadTaskCreateWithoutAssignedToInputSchema).array(),
                z.lazy(() => LeadTaskUncheckedCreateWithoutAssignedToInputSchema),
                z.lazy(() => LeadTaskUncheckedCreateWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadTaskCreateOrConnectWithoutAssignedToInputSchema),
                z.lazy(() => LeadTaskCreateOrConnectWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadTaskCreateManyAssignedToInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => LeadTaskWhereUniqueInputSchema), z.lazy(() => LeadTaskWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default LeadTaskCreateNestedManyWithoutAssignedToInputSchema
