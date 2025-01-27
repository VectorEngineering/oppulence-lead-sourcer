import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitiveAnalysisCreateWithoutLeadInputSchema } from './LeadCompetitiveAnalysisCreateWithoutLeadInputSchema'
import { LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema'
import { LeadCompetitiveAnalysisCreateOrConnectWithoutLeadInputSchema } from './LeadCompetitiveAnalysisCreateOrConnectWithoutLeadInputSchema'
import { LeadCompetitiveAnalysisCreateManyLeadInputEnvelopeSchema } from './LeadCompetitiveAnalysisCreateManyLeadInputEnvelopeSchema'
import { LeadCompetitiveAnalysisWhereUniqueInputSchema } from './LeadCompetitiveAnalysisWhereUniqueInputSchema'

export const LeadCompetitiveAnalysisUncheckedCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisUncheckedCreateNestedManyWithoutLeadInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCompetitiveAnalysisCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadCompetitiveAnalysisCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadCompetitiveAnalysisCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadCompetitiveAnalysisCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadCompetitiveAnalysisCreateManyLeadInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema),
                    z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default LeadCompetitiveAnalysisUncheckedCreateNestedManyWithoutLeadInputSchema
