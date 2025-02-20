import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutTagsInputSchema } from './ProjectUpdateWithoutTagsInputSchema'
import { ProjectUncheckedUpdateWithoutTagsInputSchema } from './ProjectUncheckedUpdateWithoutTagsInputSchema'
import { ProjectCreateWithoutTagsInputSchema } from './ProjectCreateWithoutTagsInputSchema'
import { ProjectUncheckedCreateWithoutTagsInputSchema } from './ProjectUncheckedCreateWithoutTagsInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutTagsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutTagsInput> = z
    .object({
        update: z.union([z.lazy(() => ProjectUpdateWithoutTagsInputSchema), z.lazy(() => ProjectUncheckedUpdateWithoutTagsInputSchema)]),
        create: z.union([z.lazy(() => ProjectCreateWithoutTagsInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutTagsInputSchema)]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutTagsInputSchema
