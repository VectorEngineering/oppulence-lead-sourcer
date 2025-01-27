import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutPipelineInputSchema } from './ProjectCreateWithoutPipelineInputSchema'
import { ProjectUncheckedCreateWithoutPipelineInputSchema } from './ProjectUncheckedCreateWithoutPipelineInputSchema'

export const ProjectCreateOrConnectWithoutPipelineInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutPipelineInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutPipelineInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutPipelineInputSchema)
        ])
    })
    .strict()

export default ProjectCreateOrConnectWithoutPipelineInputSchema
