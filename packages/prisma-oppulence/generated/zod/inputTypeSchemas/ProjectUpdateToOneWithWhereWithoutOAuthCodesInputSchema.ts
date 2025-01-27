import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutOAuthCodesInputSchema } from './ProjectUpdateWithoutOAuthCodesInputSchema'
import { ProjectUncheckedUpdateWithoutOAuthCodesInputSchema } from './ProjectUncheckedUpdateWithoutOAuthCodesInputSchema'

export const ProjectUpdateToOneWithWhereWithoutOAuthCodesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutOAuthCodesInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ProjectUpdateWithoutOAuthCodesInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutOAuthCodesInputSchema)
            ])
        })
        .strict()

export default ProjectUpdateToOneWithWhereWithoutOAuthCodesInputSchema
