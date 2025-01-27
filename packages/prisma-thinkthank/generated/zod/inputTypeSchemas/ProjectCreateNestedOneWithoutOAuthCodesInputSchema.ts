import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutOAuthCodesInputSchema } from './ProjectCreateWithoutOAuthCodesInputSchema'
import { ProjectUncheckedCreateWithoutOAuthCodesInputSchema } from './ProjectUncheckedCreateWithoutOAuthCodesInputSchema'
import { ProjectCreateOrConnectWithoutOAuthCodesInputSchema } from './ProjectCreateOrConnectWithoutOAuthCodesInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutOAuthCodesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutOAuthCodesInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ProjectCreateWithoutOAuthCodesInputSchema),
                z.lazy(() => ProjectUncheckedCreateWithoutOAuthCodesInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutOAuthCodesInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutOAuthCodesInputSchema
