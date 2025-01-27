import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadDecisionMakerCreateWithoutLeadInputSchema } from './LeadDecisionMakerCreateWithoutLeadInputSchema'
import { LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema } from './LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema'
import { LeadDecisionMakerCreateOrConnectWithoutLeadInputSchema } from './LeadDecisionMakerCreateOrConnectWithoutLeadInputSchema'
import { LeadDecisionMakerCreateManyLeadInputEnvelopeSchema } from './LeadDecisionMakerCreateManyLeadInputEnvelopeSchema'
import { LeadDecisionMakerWhereUniqueInputSchema } from './LeadDecisionMakerWhereUniqueInputSchema'

export const LeadDecisionMakerUncheckedCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadDecisionMakerUncheckedCreateNestedManyWithoutLeadInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadDecisionMakerCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadDecisionMakerCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadDecisionMakerCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadDecisionMakerCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadDecisionMakerCreateManyLeadInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema),
                    z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default LeadDecisionMakerUncheckedCreateNestedManyWithoutLeadInputSchema
