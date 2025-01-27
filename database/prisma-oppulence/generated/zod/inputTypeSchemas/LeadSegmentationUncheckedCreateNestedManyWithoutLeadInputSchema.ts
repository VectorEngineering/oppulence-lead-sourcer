import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSegmentationCreateWithoutLeadInputSchema } from './LeadSegmentationCreateWithoutLeadInputSchema'
import { LeadSegmentationUncheckedCreateWithoutLeadInputSchema } from './LeadSegmentationUncheckedCreateWithoutLeadInputSchema'
import { LeadSegmentationCreateOrConnectWithoutLeadInputSchema } from './LeadSegmentationCreateOrConnectWithoutLeadInputSchema'
import { LeadSegmentationCreateManyLeadInputEnvelopeSchema } from './LeadSegmentationCreateManyLeadInputEnvelopeSchema'
import { LeadSegmentationWhereUniqueInputSchema } from './LeadSegmentationWhereUniqueInputSchema'

export const LeadSegmentationUncheckedCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadSegmentationUncheckedCreateNestedManyWithoutLeadInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadSegmentationCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadSegmentationCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadSegmentationUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadSegmentationUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadSegmentationCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadSegmentationCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadSegmentationCreateManyLeadInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => LeadSegmentationWhereUniqueInputSchema), z.lazy(() => LeadSegmentationWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadSegmentationUncheckedCreateNestedManyWithoutLeadInputSchema
