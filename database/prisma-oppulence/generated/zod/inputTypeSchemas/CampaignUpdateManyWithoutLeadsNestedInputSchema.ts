import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignCreateWithoutLeadsInputSchema } from './CampaignCreateWithoutLeadsInputSchema'
import { CampaignUncheckedCreateWithoutLeadsInputSchema } from './CampaignUncheckedCreateWithoutLeadsInputSchema'
import { CampaignCreateOrConnectWithoutLeadsInputSchema } from './CampaignCreateOrConnectWithoutLeadsInputSchema'
import { CampaignUpsertWithWhereUniqueWithoutLeadsInputSchema } from './CampaignUpsertWithWhereUniqueWithoutLeadsInputSchema'
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema'
import { CampaignUpdateWithWhereUniqueWithoutLeadsInputSchema } from './CampaignUpdateWithWhereUniqueWithoutLeadsInputSchema'
import { CampaignUpdateManyWithWhereWithoutLeadsInputSchema } from './CampaignUpdateManyWithWhereWithoutLeadsInputSchema'
import { CampaignScalarWhereInputSchema } from './CampaignScalarWhereInputSchema'

export const CampaignUpdateManyWithoutLeadsNestedInputSchema: z.ZodType<Prisma.CampaignUpdateManyWithoutLeadsNestedInput> = z
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
        upsert: z
            .union([
                z.lazy(() => CampaignUpsertWithWhereUniqueWithoutLeadsInputSchema),
                z.lazy(() => CampaignUpsertWithWhereUniqueWithoutLeadsInputSchema).array()
            ])
            .optional(),
        set: z.union([z.lazy(() => CampaignWhereUniqueInputSchema), z.lazy(() => CampaignWhereUniqueInputSchema).array()]).optional(),
        disconnect: z
            .union([z.lazy(() => CampaignWhereUniqueInputSchema), z.lazy(() => CampaignWhereUniqueInputSchema).array()])
            .optional(),
        delete: z.union([z.lazy(() => CampaignWhereUniqueInputSchema), z.lazy(() => CampaignWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => CampaignWhereUniqueInputSchema), z.lazy(() => CampaignWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => CampaignUpdateWithWhereUniqueWithoutLeadsInputSchema),
                z.lazy(() => CampaignUpdateWithWhereUniqueWithoutLeadsInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => CampaignUpdateManyWithWhereWithoutLeadsInputSchema),
                z.lazy(() => CampaignUpdateManyWithWhereWithoutLeadsInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => CampaignScalarWhereInputSchema), z.lazy(() => CampaignScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default CampaignUpdateManyWithoutLeadsNestedInputSchema
