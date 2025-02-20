import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutProgramsInputSchema } from './ProjectUpdateWithoutProgramsInputSchema'
import { ProjectUncheckedUpdateWithoutProgramsInputSchema } from './ProjectUncheckedUpdateWithoutProgramsInputSchema'

export const ProjectUpdateToOneWithWhereWithoutProgramsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutProgramsInput> = z
    .object({
        where: z.lazy(() => ProjectWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => ProjectUpdateWithoutProgramsInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutProgramsInputSchema)
        ])
    })
    .strict()

export default ProjectUpdateToOneWithWhereWithoutProgramsInputSchema
