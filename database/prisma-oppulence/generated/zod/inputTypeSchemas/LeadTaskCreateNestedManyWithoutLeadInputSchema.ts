import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskCreateWithoutLeadInputSchema } from './LeadTaskCreateWithoutLeadInputSchema'
import { LeadTaskUncheckedCreateWithoutLeadInputSchema } from './LeadTaskUncheckedCreateWithoutLeadInputSchema'
import { LeadTaskCreateOrConnectWithoutLeadInputSchema } from './LeadTaskCreateOrConnectWithoutLeadInputSchema'
import { LeadTaskCreateManyLeadInputEnvelopeSchema } from './LeadTaskCreateManyLeadInputEnvelopeSchema'
import { LeadTaskWhereUniqueInputSchema } from './LeadTaskWhereUniqueInputSchema'

export const LeadTaskCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadTaskCreateNestedManyWithoutLeadInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadTaskCreateWithoutLeadInputSchema),
                z.lazy(() => LeadTaskCreateWithoutLeadInputSchema).array(),
                z.lazy(() => LeadTaskUncheckedCreateWithoutLeadInputSchema),
                z.lazy(() => LeadTaskUncheckedCreateWithoutLeadInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadTaskCreateOrConnectWithoutLeadInputSchema),
                z.lazy(() => LeadTaskCreateOrConnectWithoutLeadInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadTaskCreateManyLeadInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => LeadTaskWhereUniqueInputSchema), z.lazy(() => LeadTaskWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default LeadTaskCreateNestedManyWithoutLeadInputSchema
