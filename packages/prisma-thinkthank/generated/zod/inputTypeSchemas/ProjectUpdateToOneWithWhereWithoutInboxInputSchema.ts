import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutInboxInputSchema } from './ProjectUpdateWithoutInboxInputSchema'
import { ProjectUncheckedUpdateWithoutInboxInputSchema } from './ProjectUncheckedUpdateWithoutInboxInputSchema'

export const ProjectUpdateToOneWithWhereWithoutInboxInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutInboxInput> = z
    .object({
        where: z.lazy(() => ProjectWhereInputSchema).optional(),
        data: z.union([z.lazy(() => ProjectUpdateWithoutInboxInputSchema), z.lazy(() => ProjectUncheckedUpdateWithoutInboxInputSchema)])
    })
    .strict()

export default ProjectUpdateToOneWithWhereWithoutInboxInputSchema
