import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineCreateWithoutIntegrationsInputSchema } from './PipelineCreateWithoutIntegrationsInputSchema'
import { PipelineUncheckedCreateWithoutIntegrationsInputSchema } from './PipelineUncheckedCreateWithoutIntegrationsInputSchema'
import { PipelineCreateOrConnectWithoutIntegrationsInputSchema } from './PipelineCreateOrConnectWithoutIntegrationsInputSchema'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'

export const PipelineCreateNestedOneWithoutIntegrationsInputSchema: z.ZodType<Prisma.PipelineCreateNestedOneWithoutIntegrationsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => PipelineCreateWithoutIntegrationsInputSchema),
                z.lazy(() => PipelineUncheckedCreateWithoutIntegrationsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutIntegrationsInputSchema).optional(),
        connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional()
    })
    .strict()

export default PipelineCreateNestedOneWithoutIntegrationsInputSchema
