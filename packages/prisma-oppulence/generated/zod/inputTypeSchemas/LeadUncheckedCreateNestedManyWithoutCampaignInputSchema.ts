import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutCampaignInputSchema } from './LeadCreateWithoutCampaignInputSchema'
import { LeadUncheckedCreateWithoutCampaignInputSchema } from './LeadUncheckedCreateWithoutCampaignInputSchema'
import { LeadCreateOrConnectWithoutCampaignInputSchema } from './LeadCreateOrConnectWithoutCampaignInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadUncheckedCreateNestedManyWithoutCampaignInputSchema: z.ZodType<Prisma.LeadUncheckedCreateNestedManyWithoutCampaignInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCreateWithoutCampaignInputSchema),
                    z.lazy(() => LeadCreateWithoutCampaignInputSchema).array(),
                    z.lazy(() => LeadUncheckedCreateWithoutCampaignInputSchema),
                    z.lazy(() => LeadUncheckedCreateWithoutCampaignInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadCreateOrConnectWithoutCampaignInputSchema),
                    z.lazy(() => LeadCreateOrConnectWithoutCampaignInputSchema).array()
                ])
                .optional(),
            connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional()
        })
        .strict()

export default LeadUncheckedCreateNestedManyWithoutCampaignInputSchema
