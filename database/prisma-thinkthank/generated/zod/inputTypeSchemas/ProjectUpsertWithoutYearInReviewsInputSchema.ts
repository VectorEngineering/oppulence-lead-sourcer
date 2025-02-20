import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutYearInReviewsInputSchema } from './ProjectUpdateWithoutYearInReviewsInputSchema'
import { ProjectUncheckedUpdateWithoutYearInReviewsInputSchema } from './ProjectUncheckedUpdateWithoutYearInReviewsInputSchema'
import { ProjectCreateWithoutYearInReviewsInputSchema } from './ProjectCreateWithoutYearInReviewsInputSchema'
import { ProjectUncheckedCreateWithoutYearInReviewsInputSchema } from './ProjectUncheckedCreateWithoutYearInReviewsInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutYearInReviewsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutYearInReviewsInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProjectUpdateWithoutYearInReviewsInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutYearInReviewsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutYearInReviewsInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutYearInReviewsInputSchema)
        ]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutYearInReviewsInputSchema
