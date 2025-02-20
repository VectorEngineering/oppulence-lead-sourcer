import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutRestrictedTokensInputSchema } from './ProjectUpdateWithoutRestrictedTokensInputSchema'
import { ProjectUncheckedUpdateWithoutRestrictedTokensInputSchema } from './ProjectUncheckedUpdateWithoutRestrictedTokensInputSchema'

export const ProjectUpdateToOneWithWhereWithoutRestrictedTokensInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutRestrictedTokensInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ProjectUpdateWithoutRestrictedTokensInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutRestrictedTokensInputSchema)
            ])
        })
        .strict()

export default ProjectUpdateToOneWithWhereWithoutRestrictedTokensInputSchema
