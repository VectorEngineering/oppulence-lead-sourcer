import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadConsentCreateWithoutLeadInputSchema } from './LeadConsentCreateWithoutLeadInputSchema'
import { LeadConsentUncheckedCreateWithoutLeadInputSchema } from './LeadConsentUncheckedCreateWithoutLeadInputSchema'
import { LeadConsentCreateOrConnectWithoutLeadInputSchema } from './LeadConsentCreateOrConnectWithoutLeadInputSchema'
import { LeadConsentCreateManyLeadInputEnvelopeSchema } from './LeadConsentCreateManyLeadInputEnvelopeSchema'
import { LeadConsentWhereUniqueInputSchema } from './LeadConsentWhereUniqueInputSchema'

export const LeadConsentUncheckedCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadConsentUncheckedCreateNestedManyWithoutLeadInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadConsentCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadConsentCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadConsentUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadConsentUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadConsentCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadConsentCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadConsentCreateManyLeadInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => LeadConsentWhereUniqueInputSchema), z.lazy(() => LeadConsentWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadConsentUncheckedCreateNestedManyWithoutLeadInputSchema
