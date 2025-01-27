import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutAttachmentsInputSchema } from './LeadCreateWithoutAttachmentsInputSchema'
import { LeadUncheckedCreateWithoutAttachmentsInputSchema } from './LeadUncheckedCreateWithoutAttachmentsInputSchema'
import { LeadCreateOrConnectWithoutAttachmentsInputSchema } from './LeadCreateOrConnectWithoutAttachmentsInputSchema'
import { LeadUpsertWithWhereUniqueWithoutAttachmentsInputSchema } from './LeadUpsertWithWhereUniqueWithoutAttachmentsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateWithWhereUniqueWithoutAttachmentsInputSchema } from './LeadUpdateWithWhereUniqueWithoutAttachmentsInputSchema'
import { LeadUpdateManyWithWhereWithoutAttachmentsInputSchema } from './LeadUpdateManyWithWhereWithoutAttachmentsInputSchema'
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema'

export const LeadUpdateManyWithoutAttachmentsNestedInputSchema: z.ZodType<Prisma.LeadUpdateManyWithoutAttachmentsNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutAttachmentsInputSchema),
                z.lazy(() => LeadCreateWithoutAttachmentsInputSchema).array(),
                z.lazy(() => LeadUncheckedCreateWithoutAttachmentsInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutAttachmentsInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadCreateOrConnectWithoutAttachmentsInputSchema),
                z.lazy(() => LeadCreateOrConnectWithoutAttachmentsInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LeadUpsertWithWhereUniqueWithoutAttachmentsInputSchema),
                z.lazy(() => LeadUpsertWithWhereUniqueWithoutAttachmentsInputSchema).array()
            ])
            .optional(),
        set: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => LeadUpdateWithWhereUniqueWithoutAttachmentsInputSchema),
                z.lazy(() => LeadUpdateWithWhereUniqueWithoutAttachmentsInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LeadUpdateManyWithWhereWithoutAttachmentsInputSchema),
                z.lazy(() => LeadUpdateManyWithWhereWithoutAttachmentsInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => LeadScalarWhereInputSchema), z.lazy(() => LeadScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default LeadUpdateManyWithoutAttachmentsNestedInputSchema
