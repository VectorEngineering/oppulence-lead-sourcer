import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateWithoutTagsInputSchema } from './LeadUpdateWithoutTagsInputSchema'
import { LeadUncheckedUpdateWithoutTagsInputSchema } from './LeadUncheckedUpdateWithoutTagsInputSchema'
import { LeadCreateWithoutTagsInputSchema } from './LeadCreateWithoutTagsInputSchema'
import { LeadUncheckedCreateWithoutTagsInputSchema } from './LeadUncheckedCreateWithoutTagsInputSchema'

export const LeadUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.LeadUpsertWithWhereUniqueWithoutTagsInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        update: z.union([z.lazy(() => LeadUpdateWithoutTagsInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutTagsInputSchema)]),
        create: z.union([z.lazy(() => LeadCreateWithoutTagsInputSchema), z.lazy(() => LeadUncheckedCreateWithoutTagsInputSchema)])
    })
    .strict()

export default LeadUpsertWithWhereUniqueWithoutTagsInputSchema
