import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadMetadataCreateWithoutLeadInputSchema } from './LeadMetadataCreateWithoutLeadInputSchema'
import { LeadMetadataUncheckedCreateWithoutLeadInputSchema } from './LeadMetadataUncheckedCreateWithoutLeadInputSchema'
import { LeadMetadataCreateOrConnectWithoutLeadInputSchema } from './LeadMetadataCreateOrConnectWithoutLeadInputSchema'
import { LeadMetadataCreateManyLeadInputEnvelopeSchema } from './LeadMetadataCreateManyLeadInputEnvelopeSchema'
import { LeadMetadataWhereUniqueInputSchema } from './LeadMetadataWhereUniqueInputSchema'

export const LeadMetadataCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadMetadataCreateNestedManyWithoutLeadInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadMetadataCreateWithoutLeadInputSchema),
                z.lazy(() => LeadMetadataCreateWithoutLeadInputSchema).array(),
                z.lazy(() => LeadMetadataUncheckedCreateWithoutLeadInputSchema),
                z.lazy(() => LeadMetadataUncheckedCreateWithoutLeadInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadMetadataCreateOrConnectWithoutLeadInputSchema),
                z.lazy(() => LeadMetadataCreateOrConnectWithoutLeadInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadMetadataCreateManyLeadInputEnvelopeSchema).optional(),
        connect: z
            .union([z.lazy(() => LeadMetadataWhereUniqueInputSchema), z.lazy(() => LeadMetadataWhereUniqueInputSchema).array()])
            .optional()
    })
    .strict()

export default LeadMetadataCreateNestedManyWithoutLeadInputSchema
