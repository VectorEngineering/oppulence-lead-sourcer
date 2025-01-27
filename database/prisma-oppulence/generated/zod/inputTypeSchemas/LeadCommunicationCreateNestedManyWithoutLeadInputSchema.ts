import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCommunicationCreateWithoutLeadInputSchema } from './LeadCommunicationCreateWithoutLeadInputSchema'
import { LeadCommunicationUncheckedCreateWithoutLeadInputSchema } from './LeadCommunicationUncheckedCreateWithoutLeadInputSchema'
import { LeadCommunicationCreateOrConnectWithoutLeadInputSchema } from './LeadCommunicationCreateOrConnectWithoutLeadInputSchema'
import { LeadCommunicationCreateManyLeadInputEnvelopeSchema } from './LeadCommunicationCreateManyLeadInputEnvelopeSchema'
import { LeadCommunicationWhereUniqueInputSchema } from './LeadCommunicationWhereUniqueInputSchema'

export const LeadCommunicationCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadCommunicationCreateNestedManyWithoutLeadInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCommunicationCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadCommunicationCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadCommunicationUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadCommunicationUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadCommunicationCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadCommunicationCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadCommunicationCreateManyLeadInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => LeadCommunicationWhereUniqueInputSchema),
                    z.lazy(() => LeadCommunicationWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default LeadCommunicationCreateNestedManyWithoutLeadInputSchema
