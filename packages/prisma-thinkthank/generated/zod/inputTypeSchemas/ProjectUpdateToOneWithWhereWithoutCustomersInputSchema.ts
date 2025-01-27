import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutCustomersInputSchema } from './ProjectUpdateWithoutCustomersInputSchema'
import { ProjectUncheckedUpdateWithoutCustomersInputSchema } from './ProjectUncheckedUpdateWithoutCustomersInputSchema'

export const ProjectUpdateToOneWithWhereWithoutCustomersInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutCustomersInput> = z
    .object({
        where: z.lazy(() => ProjectWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => ProjectUpdateWithoutCustomersInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutCustomersInputSchema)
        ])
    })
    .strict()

export default ProjectUpdateToOneWithWhereWithoutCustomersInputSchema
