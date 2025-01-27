import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCategoryCreateWithoutLeadsInputSchema } from './LeadCategoryCreateWithoutLeadsInputSchema'
import { LeadCategoryUncheckedCreateWithoutLeadsInputSchema } from './LeadCategoryUncheckedCreateWithoutLeadsInputSchema'
import { LeadCategoryCreateOrConnectWithoutLeadsInputSchema } from './LeadCategoryCreateOrConnectWithoutLeadsInputSchema'
import { LeadCategoryWhereUniqueInputSchema } from './LeadCategoryWhereUniqueInputSchema'

export const LeadCategoryCreateNestedManyWithoutLeadsInputSchema: z.ZodType<Prisma.LeadCategoryCreateNestedManyWithoutLeadsInput> = z
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
        connect: z
            .union([z.lazy(() => LeadCategoryWhereUniqueInputSchema), z.lazy(() => LeadCategoryWhereUniqueInputSchema).array()])
            .optional()
    })
    .strict()

export default LeadCategoryCreateNestedManyWithoutLeadsInputSchema
