import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutCampaignInputSchema } from './LeadCreateWithoutCampaignInputSchema'
import { LeadUncheckedCreateWithoutCampaignInputSchema } from './LeadUncheckedCreateWithoutCampaignInputSchema'
import { LeadCreateOrConnectWithoutCampaignInputSchema } from './LeadCreateOrConnectWithoutCampaignInputSchema'
import { LeadUpsertWithWhereUniqueWithoutCampaignInputSchema } from './LeadUpsertWithWhereUniqueWithoutCampaignInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateWithWhereUniqueWithoutCampaignInputSchema } from './LeadUpdateWithWhereUniqueWithoutCampaignInputSchema'
import { LeadUpdateManyWithWhereWithoutCampaignInputSchema } from './LeadUpdateManyWithWhereWithoutCampaignInputSchema'
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema'

export const LeadUncheckedUpdateManyWithoutCampaignNestedInputSchema: z.ZodType<Prisma.LeadUncheckedUpdateManyWithoutCampaignNestedInput> =
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
            upsert: z
                .union([
                    z.lazy(() => LeadUpsertWithWhereUniqueWithoutCampaignInputSchema),
                    z.lazy(() => LeadUpsertWithWhereUniqueWithoutCampaignInputSchema).array()
                ])
                .optional(),
            set: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
            disconnect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
            delete: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
            connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
            update: z
                .union([
                    z.lazy(() => LeadUpdateWithWhereUniqueWithoutCampaignInputSchema),
                    z.lazy(() => LeadUpdateWithWhereUniqueWithoutCampaignInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadUpdateManyWithWhereWithoutCampaignInputSchema),
                    z.lazy(() => LeadUpdateManyWithWhereWithoutCampaignInputSchema).array()
                ])
                .optional(),
            deleteMany: z.union([z.lazy(() => LeadScalarWhereInputSchema), z.lazy(() => LeadScalarWhereInputSchema).array()]).optional()
        })
        .strict()

export default LeadUncheckedUpdateManyWithoutCampaignNestedInputSchema
