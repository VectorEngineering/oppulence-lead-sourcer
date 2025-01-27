import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadRiskCreateWithoutLeadInputSchema } from './LeadRiskCreateWithoutLeadInputSchema'
import { LeadRiskUncheckedCreateWithoutLeadInputSchema } from './LeadRiskUncheckedCreateWithoutLeadInputSchema'
import { LeadRiskCreateOrConnectWithoutLeadInputSchema } from './LeadRiskCreateOrConnectWithoutLeadInputSchema'
import { LeadRiskCreateManyLeadInputEnvelopeSchema } from './LeadRiskCreateManyLeadInputEnvelopeSchema'
import { LeadRiskWhereUniqueInputSchema } from './LeadRiskWhereUniqueInputSchema'

export const LeadRiskUncheckedCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadRiskUncheckedCreateNestedManyWithoutLeadInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadRiskCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadRiskCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadRiskUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadRiskUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadRiskCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadRiskCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadRiskCreateManyLeadInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => LeadRiskWhereUniqueInputSchema), z.lazy(() => LeadRiskWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadRiskUncheckedCreateNestedManyWithoutLeadInputSchema
