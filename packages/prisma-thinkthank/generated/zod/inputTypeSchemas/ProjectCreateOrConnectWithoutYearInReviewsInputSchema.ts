import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutYearInReviewsInputSchema } from './ProjectCreateWithoutYearInReviewsInputSchema'
import { ProjectUncheckedCreateWithoutYearInReviewsInputSchema } from './ProjectUncheckedCreateWithoutYearInReviewsInputSchema'

export const ProjectCreateOrConnectWithoutYearInReviewsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutYearInReviewsInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutYearInReviewsInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutYearInReviewsInputSchema)
        ])
    })
    .strict()

export default ProjectCreateOrConnectWithoutYearInReviewsInputSchema
