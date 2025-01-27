import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutTagsInputSchema } from './LeadCreateWithoutTagsInputSchema'
import { LeadUncheckedCreateWithoutTagsInputSchema } from './LeadUncheckedCreateWithoutTagsInputSchema'
import { LeadCreateOrConnectWithoutTagsInputSchema } from './LeadCreateOrConnectWithoutTagsInputSchema'
import { LeadUpsertWithWhereUniqueWithoutTagsInputSchema } from './LeadUpsertWithWhereUniqueWithoutTagsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateWithWhereUniqueWithoutTagsInputSchema } from './LeadUpdateWithWhereUniqueWithoutTagsInputSchema'
import { LeadUpdateManyWithWhereWithoutTagsInputSchema } from './LeadUpdateManyWithWhereWithoutTagsInputSchema'
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema'

export const LeadUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.LeadUpdateManyWithoutTagsNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutTagsInputSchema),
                z.lazy(() => LeadCreateWithoutTagsInputSchema).array(),
                z.lazy(() => LeadUncheckedCreateWithoutTagsInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutTagsInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadCreateOrConnectWithoutTagsInputSchema),
                z.lazy(() => LeadCreateOrConnectWithoutTagsInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LeadUpsertWithWhereUniqueWithoutTagsInputSchema),
                z.lazy(() => LeadUpsertWithWhereUniqueWithoutTagsInputSchema).array()
            ])
            .optional(),
        set: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => LeadUpdateWithWhereUniqueWithoutTagsInputSchema),
                z.lazy(() => LeadUpdateWithWhereUniqueWithoutTagsInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LeadUpdateManyWithWhereWithoutTagsInputSchema),
                z.lazy(() => LeadUpdateManyWithWhereWithoutTagsInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => LeadScalarWhereInputSchema), z.lazy(() => LeadScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default LeadUpdateManyWithoutTagsNestedInputSchema
