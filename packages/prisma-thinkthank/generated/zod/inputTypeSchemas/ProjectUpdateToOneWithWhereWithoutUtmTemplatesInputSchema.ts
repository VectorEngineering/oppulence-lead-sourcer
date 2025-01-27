import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutUtmTemplatesInputSchema } from './ProjectUpdateWithoutUtmTemplatesInputSchema'
import { ProjectUncheckedUpdateWithoutUtmTemplatesInputSchema } from './ProjectUncheckedUpdateWithoutUtmTemplatesInputSchema'

export const ProjectUpdateToOneWithWhereWithoutUtmTemplatesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutUtmTemplatesInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ProjectUpdateWithoutUtmTemplatesInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutUtmTemplatesInputSchema)
            ])
        })
        .strict()

export default ProjectUpdateToOneWithWhereWithoutUtmTemplatesInputSchema
