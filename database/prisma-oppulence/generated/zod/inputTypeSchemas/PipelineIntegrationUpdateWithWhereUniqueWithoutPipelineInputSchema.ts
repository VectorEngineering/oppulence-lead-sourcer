import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineIntegrationWhereUniqueInputSchema } from './PipelineIntegrationWhereUniqueInputSchema'
import { PipelineIntegrationUpdateWithoutPipelineInputSchema } from './PipelineIntegrationUpdateWithoutPipelineInputSchema'
import { PipelineIntegrationUncheckedUpdateWithoutPipelineInputSchema } from './PipelineIntegrationUncheckedUpdateWithoutPipelineInputSchema'

export const PipelineIntegrationUpdateWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineIntegrationUpdateWithWhereUniqueWithoutPipelineInput> =
    z
        .object({
            where: z.lazy(() => PipelineIntegrationWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => PipelineIntegrationUpdateWithoutPipelineInputSchema),
                z.lazy(() => PipelineIntegrationUncheckedUpdateWithoutPipelineInputSchema)
            ])
        })
        .strict()

export default PipelineIntegrationUpdateWithWhereUniqueWithoutPipelineInputSchema
