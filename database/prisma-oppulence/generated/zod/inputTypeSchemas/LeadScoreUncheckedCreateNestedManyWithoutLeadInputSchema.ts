import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoreCreateWithoutLeadInputSchema } from './LeadScoreCreateWithoutLeadInputSchema'
import { LeadScoreUncheckedCreateWithoutLeadInputSchema } from './LeadScoreUncheckedCreateWithoutLeadInputSchema'
import { LeadScoreCreateOrConnectWithoutLeadInputSchema } from './LeadScoreCreateOrConnectWithoutLeadInputSchema'
import { LeadScoreCreateManyLeadInputEnvelopeSchema } from './LeadScoreCreateManyLeadInputEnvelopeSchema'
import { LeadScoreWhereUniqueInputSchema } from './LeadScoreWhereUniqueInputSchema'

export const LeadScoreUncheckedCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadScoreUncheckedCreateNestedManyWithoutLeadInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadScoreCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadScoreCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadScoreUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadScoreUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadScoreCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadScoreCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadScoreCreateManyLeadInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => LeadScoreWhereUniqueInputSchema), z.lazy(() => LeadScoreWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadScoreUncheckedCreateNestedManyWithoutLeadInputSchema
