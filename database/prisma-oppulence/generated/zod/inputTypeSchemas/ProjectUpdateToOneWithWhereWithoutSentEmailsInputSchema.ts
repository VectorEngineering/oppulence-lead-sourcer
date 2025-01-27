import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutSentEmailsInputSchema } from './ProjectUpdateWithoutSentEmailsInputSchema'
import { ProjectUncheckedUpdateWithoutSentEmailsInputSchema } from './ProjectUncheckedUpdateWithoutSentEmailsInputSchema'

export const ProjectUpdateToOneWithWhereWithoutSentEmailsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutSentEmailsInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ProjectUpdateWithoutSentEmailsInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutSentEmailsInputSchema)
            ])
        })
        .strict()

export default ProjectUpdateToOneWithWhereWithoutSentEmailsInputSchema
