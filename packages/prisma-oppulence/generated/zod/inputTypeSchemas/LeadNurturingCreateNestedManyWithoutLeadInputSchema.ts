import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadNurturingCreateWithoutLeadInputSchema } from './LeadNurturingCreateWithoutLeadInputSchema'
import { LeadNurturingUncheckedCreateWithoutLeadInputSchema } from './LeadNurturingUncheckedCreateWithoutLeadInputSchema'
import { LeadNurturingCreateOrConnectWithoutLeadInputSchema } from './LeadNurturingCreateOrConnectWithoutLeadInputSchema'
import { LeadNurturingCreateManyLeadInputEnvelopeSchema } from './LeadNurturingCreateManyLeadInputEnvelopeSchema'
import { LeadNurturingWhereUniqueInputSchema } from './LeadNurturingWhereUniqueInputSchema'

export const LeadNurturingCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadNurturingCreateNestedManyWithoutLeadInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadNurturingCreateWithoutLeadInputSchema),
                z.lazy(() => LeadNurturingCreateWithoutLeadInputSchema).array(),
                z.lazy(() => LeadNurturingUncheckedCreateWithoutLeadInputSchema),
                z.lazy(() => LeadNurturingUncheckedCreateWithoutLeadInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadNurturingCreateOrConnectWithoutLeadInputSchema),
                z.lazy(() => LeadNurturingCreateOrConnectWithoutLeadInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadNurturingCreateManyLeadInputEnvelopeSchema).optional(),
        connect: z
            .union([z.lazy(() => LeadNurturingWhereUniqueInputSchema), z.lazy(() => LeadNurturingWhereUniqueInputSchema).array()])
            .optional()
    })
    .strict()

export default LeadNurturingCreateNestedManyWithoutLeadInputSchema
