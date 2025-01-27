import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema'
import { CampaignCreateWithoutLeadsInputSchema } from './CampaignCreateWithoutLeadsInputSchema'
import { CampaignUncheckedCreateWithoutLeadsInputSchema } from './CampaignUncheckedCreateWithoutLeadsInputSchema'

export const CampaignCreateOrConnectWithoutLeadsInputSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutLeadsInput> = z
    .object({
        where: z.lazy(() => CampaignWhereUniqueInputSchema),
        create: z.union([z.lazy(() => CampaignCreateWithoutLeadsInputSchema), z.lazy(() => CampaignUncheckedCreateWithoutLeadsInputSchema)])
    })
    .strict()

export default CampaignCreateOrConnectWithoutLeadsInputSchema
