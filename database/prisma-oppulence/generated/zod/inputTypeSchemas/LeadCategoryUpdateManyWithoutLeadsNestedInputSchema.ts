import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCategoryCreateWithoutLeadsInputSchema } from './LeadCategoryCreateWithoutLeadsInputSchema'
import { LeadCategoryUncheckedCreateWithoutLeadsInputSchema } from './LeadCategoryUncheckedCreateWithoutLeadsInputSchema'
import { LeadCategoryCreateOrConnectWithoutLeadsInputSchema } from './LeadCategoryCreateOrConnectWithoutLeadsInputSchema'
import { LeadCategoryUpsertWithWhereUniqueWithoutLeadsInputSchema } from './LeadCategoryUpsertWithWhereUniqueWithoutLeadsInputSchema'
import { LeadCategoryWhereUniqueInputSchema } from './LeadCategoryWhereUniqueInputSchema'
import { LeadCategoryUpdateWithWhereUniqueWithoutLeadsInputSchema } from './LeadCategoryUpdateWithWhereUniqueWithoutLeadsInputSchema'
import { LeadCategoryUpdateManyWithWhereWithoutLeadsInputSchema } from './LeadCategoryUpdateManyWithWhereWithoutLeadsInputSchema'
import { LeadCategoryScalarWhereInputSchema } from './LeadCategoryScalarWhereInputSchema'

export const LeadCategoryUpdateManyWithoutLeadsNestedInputSchema: z.ZodType<Prisma.LeadCategoryUpdateManyWithoutLeadsNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCategoryCreateWithoutLeadsInputSchema),
                z.lazy(() => LeadCategoryCreateWithoutLeadsInputSchema).array(),
                z.lazy(() => LeadCategoryUncheckedCreateWithoutLeadsInputSchema),
                z.lazy(() => LeadCategoryUncheckedCreateWithoutLeadsInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadCategoryCreateOrConnectWithoutLeadsInputSchema),
                z.lazy(() => LeadCategoryCreateOrConnectWithoutLeadsInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LeadCategoryUpsertWithWhereUniqueWithoutLeadsInputSchema),
                z.lazy(() => LeadCategoryUpsertWithWhereUniqueWithoutLeadsInputSchema).array()
            ])
            .optional(),
        set: z
            .union([z.lazy(() => LeadCategoryWhereUniqueInputSchema), z.lazy(() => LeadCategoryWhereUniqueInputSchema).array()])
            .optional(),
        disconnect: z
            .union([z.lazy(() => LeadCategoryWhereUniqueInputSchema), z.lazy(() => LeadCategoryWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => LeadCategoryWhereUniqueInputSchema), z.lazy(() => LeadCategoryWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => LeadCategoryWhereUniqueInputSchema), z.lazy(() => LeadCategoryWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => LeadCategoryUpdateWithWhereUniqueWithoutLeadsInputSchema),
                z.lazy(() => LeadCategoryUpdateWithWhereUniqueWithoutLeadsInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LeadCategoryUpdateManyWithWhereWithoutLeadsInputSchema),
                z.lazy(() => LeadCategoryUpdateManyWithWhereWithoutLeadsInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => LeadCategoryScalarWhereInputSchema), z.lazy(() => LeadCategoryScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default LeadCategoryUpdateManyWithoutLeadsNestedInputSchema
