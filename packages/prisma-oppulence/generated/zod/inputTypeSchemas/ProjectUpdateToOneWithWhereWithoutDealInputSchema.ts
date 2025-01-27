import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutDealInputSchema } from './ProjectUpdateWithoutDealInputSchema'
import { ProjectUncheckedUpdateWithoutDealInputSchema } from './ProjectUncheckedUpdateWithoutDealInputSchema'

export const ProjectUpdateToOneWithWhereWithoutDealInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDealInput> = z
    .object({
        where: z.lazy(() => ProjectWhereInputSchema).optional(),
        data: z.union([z.lazy(() => ProjectUpdateWithoutDealInputSchema), z.lazy(() => ProjectUncheckedUpdateWithoutDealInputSchema)])
    })
    .strict()

export default ProjectUpdateToOneWithWhereWithoutDealInputSchema
