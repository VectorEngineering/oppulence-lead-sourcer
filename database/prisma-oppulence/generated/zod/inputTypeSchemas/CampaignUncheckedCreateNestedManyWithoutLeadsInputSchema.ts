import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignCreateWithoutLeadsInputSchema } from './CampaignCreateWithoutLeadsInputSchema'
import { CampaignUncheckedCreateWithoutLeadsInputSchema } from './CampaignUncheckedCreateWithoutLeadsInputSchema'
import { CampaignCreateOrConnectWithoutLeadsInputSchema } from './CampaignCreateOrConnectWithoutLeadsInputSchema'
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema'

export const CampaignUncheckedCreateNestedManyWithoutLeadsInputSchema: z.ZodType<Prisma.CampaignUncheckedCreateNestedManyWithoutLeadsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => CampaignCreateWithoutLeadsInputSchema),
                    z.lazy(() => CampaignCreateWithoutLeadsInputSchema).array(),
                    z.lazy(() => CampaignUncheckedCreateWithoutLeadsInputSchema),
                    z.lazy(() => CampaignUncheckedCreateWithoutLeadsInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => CampaignCreateOrConnectWithoutLeadsInputSchema),
                    z.lazy(() => CampaignCreateOrConnectWithoutLeadsInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([z.lazy(() => CampaignWhereUniqueInputSchema), z.lazy(() => CampaignWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default CampaignUncheckedCreateNestedManyWithoutLeadsInputSchema
