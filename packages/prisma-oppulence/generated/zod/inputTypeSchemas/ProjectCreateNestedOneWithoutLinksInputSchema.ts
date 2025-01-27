import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutLinksInputSchema } from './ProjectCreateWithoutLinksInputSchema'
import { ProjectUncheckedCreateWithoutLinksInputSchema } from './ProjectUncheckedCreateWithoutLinksInputSchema'
import { ProjectCreateOrConnectWithoutLinksInputSchema } from './ProjectCreateOrConnectWithoutLinksInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutLinksInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutLinksInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutLinksInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutLinksInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutLinksInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutLinksInputSchema
