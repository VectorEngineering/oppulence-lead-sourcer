import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadMetadataScalarWhereInputSchema } from './LeadMetadataScalarWhereInputSchema'
import { LeadMetadataUpdateManyMutationInputSchema } from './LeadMetadataUpdateManyMutationInputSchema'
import { LeadMetadataUncheckedUpdateManyWithoutLeadInputSchema } from './LeadMetadataUncheckedUpdateManyWithoutLeadInputSchema'

export const LeadMetadataUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadMetadataUpdateManyWithWhereWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadMetadataScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => LeadMetadataUpdateManyMutationInputSchema),
            z.lazy(() => LeadMetadataUncheckedUpdateManyWithoutLeadInputSchema)
        ])
    })
    .strict()

export default LeadMetadataUpdateManyWithWhereWithoutLeadInputSchema
