import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutPipelineInputSchema } from './ProjectUpdateWithoutPipelineInputSchema'
import { ProjectUncheckedUpdateWithoutPipelineInputSchema } from './ProjectUncheckedUpdateWithoutPipelineInputSchema'

export const ProjectUpdateToOneWithWhereWithoutPipelineInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutPipelineInput> = z
    .object({
        where: z.lazy(() => ProjectWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => ProjectUpdateWithoutPipelineInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutPipelineInputSchema)
        ])
    })
    .strict()

export default ProjectUpdateToOneWithWhereWithoutPipelineInputSchema
