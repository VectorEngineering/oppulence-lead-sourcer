import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignCreateWithoutVariantsInputSchema } from './CampaignCreateWithoutVariantsInputSchema'
import { CampaignUncheckedCreateWithoutVariantsInputSchema } from './CampaignUncheckedCreateWithoutVariantsInputSchema'
import { CampaignCreateOrConnectWithoutVariantsInputSchema } from './CampaignCreateOrConnectWithoutVariantsInputSchema'
import { CampaignUpsertWithoutVariantsInputSchema } from './CampaignUpsertWithoutVariantsInputSchema'
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema'
import { CampaignUpdateToOneWithWhereWithoutVariantsInputSchema } from './CampaignUpdateToOneWithWhereWithoutVariantsInputSchema'
import { CampaignUpdateWithoutVariantsInputSchema } from './CampaignUpdateWithoutVariantsInputSchema'
import { CampaignUncheckedUpdateWithoutVariantsInputSchema } from './CampaignUncheckedUpdateWithoutVariantsInputSchema'

export const CampaignUpdateOneRequiredWithoutVariantsNestedInputSchema: z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutVariantsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => CampaignCreateWithoutVariantsInputSchema),
                    z.lazy(() => CampaignUncheckedCreateWithoutVariantsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutVariantsInputSchema).optional(),
            upsert: z.lazy(() => CampaignUpsertWithoutVariantsInputSchema).optional(),
            connect: z.lazy(() => CampaignWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => CampaignUpdateToOneWithWhereWithoutVariantsInputSchema),
                    z.lazy(() => CampaignUpdateWithoutVariantsInputSchema),
                    z.lazy(() => CampaignUncheckedUpdateWithoutVariantsInputSchema)
                ])
                .optional()
        })
        .strict()

export default CampaignUpdateOneRequiredWithoutVariantsNestedInputSchema
