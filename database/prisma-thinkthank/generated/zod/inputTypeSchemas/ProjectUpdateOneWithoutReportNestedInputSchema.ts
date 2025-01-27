import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutReportInputSchema } from './ProjectCreateWithoutReportInputSchema'
import { ProjectUncheckedCreateWithoutReportInputSchema } from './ProjectUncheckedCreateWithoutReportInputSchema'
import { ProjectCreateOrConnectWithoutReportInputSchema } from './ProjectCreateOrConnectWithoutReportInputSchema'
import { ProjectUpsertWithoutReportInputSchema } from './ProjectUpsertWithoutReportInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutReportInputSchema } from './ProjectUpdateToOneWithWhereWithoutReportInputSchema'
import { ProjectUpdateWithoutReportInputSchema } from './ProjectUpdateWithoutReportInputSchema'
import { ProjectUncheckedUpdateWithoutReportInputSchema } from './ProjectUncheckedUpdateWithoutReportInputSchema'

export const ProjectUpdateOneWithoutReportNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutReportNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutReportInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutReportInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutReportInputSchema).optional(),
        upsert: z.lazy(() => ProjectUpsertWithoutReportInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => ProjectUpdateToOneWithWhereWithoutReportInputSchema),
                z.lazy(() => ProjectUpdateWithoutReportInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutReportInputSchema)
            ])
            .optional()
    })
    .strict()

export default ProjectUpdateOneWithoutReportNestedInputSchema
