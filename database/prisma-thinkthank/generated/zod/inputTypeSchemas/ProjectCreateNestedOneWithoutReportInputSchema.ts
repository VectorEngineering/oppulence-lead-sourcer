import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutReportInputSchema } from './ProjectCreateWithoutReportInputSchema'
import { ProjectUncheckedCreateWithoutReportInputSchema } from './ProjectUncheckedCreateWithoutReportInputSchema'
import { ProjectCreateOrConnectWithoutReportInputSchema } from './ProjectCreateOrConnectWithoutReportInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutReportInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutReportInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutReportInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutReportInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutReportInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutReportInputSchema
