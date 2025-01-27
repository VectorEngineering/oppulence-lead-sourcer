import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTouchpointCreateWithoutCampaignInputSchema } from './LeadTouchpointCreateWithoutCampaignInputSchema'
import { LeadTouchpointUncheckedCreateWithoutCampaignInputSchema } from './LeadTouchpointUncheckedCreateWithoutCampaignInputSchema'
import { LeadTouchpointCreateOrConnectWithoutCampaignInputSchema } from './LeadTouchpointCreateOrConnectWithoutCampaignInputSchema'
import { LeadTouchpointUpsertWithWhereUniqueWithoutCampaignInputSchema } from './LeadTouchpointUpsertWithWhereUniqueWithoutCampaignInputSchema'
import { LeadTouchpointWhereUniqueInputSchema } from './LeadTouchpointWhereUniqueInputSchema'
import { LeadTouchpointUpdateWithWhereUniqueWithoutCampaignInputSchema } from './LeadTouchpointUpdateWithWhereUniqueWithoutCampaignInputSchema'
import { LeadTouchpointUpdateManyWithWhereWithoutCampaignInputSchema } from './LeadTouchpointUpdateManyWithWhereWithoutCampaignInputSchema'
import { LeadTouchpointScalarWhereInputSchema } from './LeadTouchpointScalarWhereInputSchema'

export const LeadTouchpointUpdateManyWithoutCampaignNestedInputSchema: z.ZodType<Prisma.LeadTouchpointUpdateManyWithoutCampaignNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadTouchpointCreateWithoutCampaignInputSchema),
                    z.lazy(() => LeadTouchpointCreateWithoutCampaignInputSchema).array(),
                    z.lazy(() => LeadTouchpointUncheckedCreateWithoutCampaignInputSchema),
                    z.lazy(() => LeadTouchpointUncheckedCreateWithoutCampaignInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadTouchpointCreateOrConnectWithoutCampaignInputSchema),
                    z.lazy(() => LeadTouchpointCreateOrConnectWithoutCampaignInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadTouchpointUpsertWithWhereUniqueWithoutCampaignInputSchema),
                    z.lazy(() => LeadTouchpointUpsertWithWhereUniqueWithoutCampaignInputSchema).array()
                ])
                .optional(),
            set: z
                .union([z.lazy(() => LeadTouchpointWhereUniqueInputSchema), z.lazy(() => LeadTouchpointWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => LeadTouchpointWhereUniqueInputSchema), z.lazy(() => LeadTouchpointWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => LeadTouchpointWhereUniqueInputSchema), z.lazy(() => LeadTouchpointWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => LeadTouchpointWhereUniqueInputSchema), z.lazy(() => LeadTouchpointWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadTouchpointUpdateWithWhereUniqueWithoutCampaignInputSchema),
                    z.lazy(() => LeadTouchpointUpdateWithWhereUniqueWithoutCampaignInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadTouchpointUpdateManyWithWhereWithoutCampaignInputSchema),
                    z.lazy(() => LeadTouchpointUpdateManyWithWhereWithoutCampaignInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => LeadTouchpointScalarWhereInputSchema), z.lazy(() => LeadTouchpointScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadTouchpointUpdateManyWithoutCampaignNestedInputSchema
