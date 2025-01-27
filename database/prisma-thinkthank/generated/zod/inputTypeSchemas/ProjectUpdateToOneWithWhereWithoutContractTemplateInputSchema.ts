import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutContractTemplateInputSchema } from './ProjectUpdateWithoutContractTemplateInputSchema'
import { ProjectUncheckedUpdateWithoutContractTemplateInputSchema } from './ProjectUncheckedUpdateWithoutContractTemplateInputSchema'

export const ProjectUpdateToOneWithWhereWithoutContractTemplateInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutContractTemplateInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ProjectUpdateWithoutContractTemplateInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutContractTemplateInputSchema)
            ])
        })
        .strict()

export default ProjectUpdateToOneWithWhereWithoutContractTemplateInputSchema
