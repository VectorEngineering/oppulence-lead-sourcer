import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetRevisionCreateWithoutBudgetInputSchema } from './LeadBudgetRevisionCreateWithoutBudgetInputSchema'
import { LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema } from './LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema'
import { LeadBudgetRevisionCreateOrConnectWithoutBudgetInputSchema } from './LeadBudgetRevisionCreateOrConnectWithoutBudgetInputSchema'
import { LeadBudgetRevisionCreateManyBudgetInputEnvelopeSchema } from './LeadBudgetRevisionCreateManyBudgetInputEnvelopeSchema'
import { LeadBudgetRevisionWhereUniqueInputSchema } from './LeadBudgetRevisionWhereUniqueInputSchema'

export const LeadBudgetRevisionUncheckedCreateNestedManyWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetRevisionUncheckedCreateNestedManyWithoutBudgetInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadBudgetRevisionCreateWithoutBudgetInputSchema),
                    z.lazy(() => LeadBudgetRevisionCreateWithoutBudgetInputSchema).array(),
                    z.lazy(() => LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema),
                    z.lazy(() => LeadBudgetRevisionUncheckedCreateWithoutBudgetInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadBudgetRevisionCreateOrConnectWithoutBudgetInputSchema),
                    z.lazy(() => LeadBudgetRevisionCreateOrConnectWithoutBudgetInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadBudgetRevisionCreateManyBudgetInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema),
                    z.lazy(() => LeadBudgetRevisionWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default LeadBudgetRevisionUncheckedCreateNestedManyWithoutBudgetInputSchema
