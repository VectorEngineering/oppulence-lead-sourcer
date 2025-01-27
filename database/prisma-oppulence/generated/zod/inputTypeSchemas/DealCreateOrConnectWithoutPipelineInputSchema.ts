import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealCreateWithoutPipelineInputSchema } from './DealCreateWithoutPipelineInputSchema'
import { DealUncheckedCreateWithoutPipelineInputSchema } from './DealUncheckedCreateWithoutPipelineInputSchema'

export const DealCreateOrConnectWithoutPipelineInputSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutPipelineInput> = z
    .object({
        where: z.lazy(() => DealWhereUniqueInputSchema),
        create: z.union([z.lazy(() => DealCreateWithoutPipelineInputSchema), z.lazy(() => DealUncheckedCreateWithoutPipelineInputSchema)])
    })
    .strict()

export default DealCreateOrConnectWithoutPipelineInputSchema
