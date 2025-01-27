import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutTagsInputSchema } from './LeadCreateWithoutTagsInputSchema'
import { LeadUncheckedCreateWithoutTagsInputSchema } from './LeadUncheckedCreateWithoutTagsInputSchema'
import { LeadCreateOrConnectWithoutTagsInputSchema } from './LeadCreateOrConnectWithoutTagsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadUncheckedCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.LeadUncheckedCreateNestedManyWithoutTagsInput> = z
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
        connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default LeadUncheckedCreateNestedManyWithoutTagsInputSchema
