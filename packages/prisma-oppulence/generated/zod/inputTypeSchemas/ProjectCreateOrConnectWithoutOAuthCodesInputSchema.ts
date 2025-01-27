import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutOAuthCodesInputSchema } from './ProjectCreateWithoutOAuthCodesInputSchema'
import { ProjectUncheckedCreateWithoutOAuthCodesInputSchema } from './ProjectUncheckedCreateWithoutOAuthCodesInputSchema'

export const ProjectCreateOrConnectWithoutOAuthCodesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutOAuthCodesInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutOAuthCodesInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutOAuthCodesInputSchema)
        ])
    })
    .strict()

export default ProjectCreateOrConnectWithoutOAuthCodesInputSchema
