import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutReportInputSchema } from './ProjectCreateWithoutReportInputSchema'
import { ProjectUncheckedCreateWithoutReportInputSchema } from './ProjectUncheckedCreateWithoutReportInputSchema'

export const ProjectCreateOrConnectWithoutReportInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutReportInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([z.lazy(() => ProjectCreateWithoutReportInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutReportInputSchema)])
    })
    .strict()

export default ProjectCreateOrConnectWithoutReportInputSchema
