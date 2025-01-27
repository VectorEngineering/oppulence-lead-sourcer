import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineIntegrationWhereUniqueInputSchema } from './PipelineIntegrationWhereUniqueInputSchema'
import { PipelineIntegrationCreateWithoutPipelineInputSchema } from './PipelineIntegrationCreateWithoutPipelineInputSchema'
import { PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema } from './PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema'

export const PipelineIntegrationCreateOrConnectWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineIntegrationCreateOrConnectWithoutPipelineInput> =
    z
        .object({
            where: z.lazy(() => PipelineIntegrationWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => PipelineIntegrationCreateWithoutPipelineInputSchema),
                z.lazy(() => PipelineIntegrationUncheckedCreateWithoutPipelineInputSchema)
            ])
        })
        .strict()

export default PipelineIntegrationCreateOrConnectWithoutPipelineInputSchema
