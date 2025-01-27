import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutCategoriesInputSchema } from './LeadCreateWithoutCategoriesInputSchema'
import { LeadUncheckedCreateWithoutCategoriesInputSchema } from './LeadUncheckedCreateWithoutCategoriesInputSchema'
import { LeadCreateOrConnectWithoutCategoriesInputSchema } from './LeadCreateOrConnectWithoutCategoriesInputSchema'
import { LeadUpsertWithWhereUniqueWithoutCategoriesInputSchema } from './LeadUpsertWithWhereUniqueWithoutCategoriesInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateWithWhereUniqueWithoutCategoriesInputSchema } from './LeadUpdateWithWhereUniqueWithoutCategoriesInputSchema'
import { LeadUpdateManyWithWhereWithoutCategoriesInputSchema } from './LeadUpdateManyWithWhereWithoutCategoriesInputSchema'
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema'

export const LeadUpdateManyWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.LeadUpdateManyWithoutCategoriesNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutCategoriesInputSchema),
                z.lazy(() => LeadCreateWithoutCategoriesInputSchema).array(),
                z.lazy(() => LeadUncheckedCreateWithoutCategoriesInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutCategoriesInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadCreateOrConnectWithoutCategoriesInputSchema),
                z.lazy(() => LeadCreateOrConnectWithoutCategoriesInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LeadUpsertWithWhereUniqueWithoutCategoriesInputSchema),
                z.lazy(() => LeadUpsertWithWhereUniqueWithoutCategoriesInputSchema).array()
            ])
            .optional(),
        set: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => LeadUpdateWithWhereUniqueWithoutCategoriesInputSchema),
                z.lazy(() => LeadUpdateWithWhereUniqueWithoutCategoriesInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LeadUpdateManyWithWhereWithoutCategoriesInputSchema),
                z.lazy(() => LeadUpdateManyWithWhereWithoutCategoriesInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => LeadScalarWhereInputSchema), z.lazy(() => LeadScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default LeadUpdateManyWithoutCategoriesNestedInputSchema
