import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineIntegrationScalarWhereInputSchema } from './PipelineIntegrationScalarWhereInputSchema'
import { PipelineIntegrationUpdateManyMutationInputSchema } from './PipelineIntegrationUpdateManyMutationInputSchema'
import { PipelineIntegrationUncheckedUpdateManyWithoutPipelineInputSchema } from './PipelineIntegrationUncheckedUpdateManyWithoutPipelineInputSchema'

export const PipelineIntegrationUpdateManyWithWhereWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineIntegrationUpdateManyWithWhereWithoutPipelineInput> =
    z
        .object({
            where: z.lazy(() => PipelineIntegrationScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => PipelineIntegrationUpdateManyMutationInputSchema),
                z.lazy(() => PipelineIntegrationUncheckedUpdateManyWithoutPipelineInputSchema)
            ])
        })
        .strict()

export default PipelineIntegrationUpdateManyWithWhereWithoutPipelineInputSchema
