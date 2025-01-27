import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadMetadataWhereUniqueInputSchema } from './LeadMetadataWhereUniqueInputSchema'
import { LeadMetadataUpdateWithoutLeadInputSchema } from './LeadMetadataUpdateWithoutLeadInputSchema'
import { LeadMetadataUncheckedUpdateWithoutLeadInputSchema } from './LeadMetadataUncheckedUpdateWithoutLeadInputSchema'
import { LeadMetadataCreateWithoutLeadInputSchema } from './LeadMetadataCreateWithoutLeadInputSchema'
import { LeadMetadataUncheckedCreateWithoutLeadInputSchema } from './LeadMetadataUncheckedCreateWithoutLeadInputSchema'

export const LeadMetadataUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadMetadataUpsertWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadMetadataWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => LeadMetadataUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadMetadataUncheckedUpdateWithoutLeadInputSchema)
            ]),
            create: z.union([
                z.lazy(() => LeadMetadataCreateWithoutLeadInputSchema),
                z.lazy(() => LeadMetadataUncheckedCreateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadMetadataUpsertWithWhereUniqueWithoutLeadInputSchema
