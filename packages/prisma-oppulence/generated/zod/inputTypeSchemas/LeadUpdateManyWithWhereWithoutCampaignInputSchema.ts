import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema'
import { LeadUpdateManyMutationInputSchema } from './LeadUpdateManyMutationInputSchema'
import { LeadUncheckedUpdateManyWithoutCampaignInputSchema } from './LeadUncheckedUpdateManyWithoutCampaignInputSchema'

export const LeadUpdateManyWithWhereWithoutCampaignInputSchema: z.ZodType<Prisma.LeadUpdateManyWithWhereWithoutCampaignInput> = z
    .object({
        where: z.lazy(() => LeadScalarWhereInputSchema),
        data: z.union([z.lazy(() => LeadUpdateManyMutationInputSchema), z.lazy(() => LeadUncheckedUpdateManyWithoutCampaignInputSchema)])
    })
    .strict()

export default LeadUpdateManyWithWhereWithoutCampaignInputSchema
