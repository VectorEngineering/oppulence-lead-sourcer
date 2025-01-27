import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateWithoutLeadInputSchema } from './DealUpdateWithoutLeadInputSchema'
import { DealUncheckedUpdateWithoutLeadInputSchema } from './DealUncheckedUpdateWithoutLeadInputSchema'

export const DealUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.DealUpdateWithWhereUniqueWithoutLeadInput> = z
    .object({
        where: z.lazy(() => DealWhereUniqueInputSchema),
        data: z.union([z.lazy(() => DealUpdateWithoutLeadInputSchema), z.lazy(() => DealUncheckedUpdateWithoutLeadInputSchema)])
    })
    .strict()

export default DealUpdateWithWhereUniqueWithoutLeadInputSchema
