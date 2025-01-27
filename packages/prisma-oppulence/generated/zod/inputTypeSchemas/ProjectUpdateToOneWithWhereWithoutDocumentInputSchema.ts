import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutDocumentInputSchema } from './ProjectUpdateWithoutDocumentInputSchema'
import { ProjectUncheckedUpdateWithoutDocumentInputSchema } from './ProjectUncheckedUpdateWithoutDocumentInputSchema'

export const ProjectUpdateToOneWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDocumentInput> = z
    .object({
        where: z.lazy(() => ProjectWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => ProjectUpdateWithoutDocumentInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutDocumentInputSchema)
        ])
    })
    .strict()

export default ProjectUpdateToOneWithWhereWithoutDocumentInputSchema
