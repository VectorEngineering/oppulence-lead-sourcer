import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutOAuthCodesInputSchema } from './ProjectUpdateWithoutOAuthCodesInputSchema'
import { ProjectUncheckedUpdateWithoutOAuthCodesInputSchema } from './ProjectUncheckedUpdateWithoutOAuthCodesInputSchema'
import { ProjectCreateWithoutOAuthCodesInputSchema } from './ProjectCreateWithoutOAuthCodesInputSchema'
import { ProjectUncheckedCreateWithoutOAuthCodesInputSchema } from './ProjectUncheckedCreateWithoutOAuthCodesInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutOAuthCodesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutOAuthCodesInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProjectUpdateWithoutOAuthCodesInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutOAuthCodesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutOAuthCodesInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutOAuthCodesInputSchema)
        ]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutOAuthCodesInputSchema
