import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignScalarWhereInputSchema } from './CampaignScalarWhereInputSchema'
import { CampaignUpdateManyMutationInputSchema } from './CampaignUpdateManyMutationInputSchema'
import { CampaignUncheckedUpdateManyWithoutLeadsInputSchema } from './CampaignUncheckedUpdateManyWithoutLeadsInputSchema'

export const CampaignUpdateManyWithWhereWithoutLeadsInputSchema: z.ZodType<Prisma.CampaignUpdateManyWithWhereWithoutLeadsInput> = z
    .object({
        where: z.lazy(() => CampaignScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => CampaignUpdateManyMutationInputSchema),
            z.lazy(() => CampaignUncheckedUpdateManyWithoutLeadsInputSchema)
        ])
    })
    .strict()

export default CampaignUpdateManyWithWhereWithoutLeadsInputSchema
