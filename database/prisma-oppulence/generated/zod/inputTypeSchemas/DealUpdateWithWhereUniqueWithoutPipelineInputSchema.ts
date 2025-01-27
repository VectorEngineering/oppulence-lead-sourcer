import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateWithoutPipelineInputSchema } from './DealUpdateWithoutPipelineInputSchema'
import { DealUncheckedUpdateWithoutPipelineInputSchema } from './DealUncheckedUpdateWithoutPipelineInputSchema'

export const DealUpdateWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.DealUpdateWithWhereUniqueWithoutPipelineInput> = z
    .object({
        where: z.lazy(() => DealWhereUniqueInputSchema),
        data: z.union([z.lazy(() => DealUpdateWithoutPipelineInputSchema), z.lazy(() => DealUncheckedUpdateWithoutPipelineInputSchema)])
    })
    .strict()

export default DealUpdateWithWhereUniqueWithoutPipelineInputSchema
