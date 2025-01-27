import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutLeadInputSchema } from './ProjectCreateWithoutLeadInputSchema'
import { ProjectUncheckedCreateWithoutLeadInputSchema } from './ProjectUncheckedCreateWithoutLeadInputSchema'
import { ProjectCreateOrConnectWithoutLeadInputSchema } from './ProjectCreateOrConnectWithoutLeadInputSchema'
import { ProjectUpsertWithoutLeadInputSchema } from './ProjectUpsertWithoutLeadInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutLeadInputSchema } from './ProjectUpdateToOneWithWhereWithoutLeadInputSchema'
import { ProjectUpdateWithoutLeadInputSchema } from './ProjectUpdateWithoutLeadInputSchema'
import { ProjectUncheckedUpdateWithoutLeadInputSchema } from './ProjectUncheckedUpdateWithoutLeadInputSchema'

export const ProjectUpdateOneRequiredWithoutLeadNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutLeadNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutLeadInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutLeadInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutLeadInputSchema).optional(),
        upsert: z.lazy(() => ProjectUpsertWithoutLeadInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => ProjectUpdateToOneWithWhereWithoutLeadInputSchema),
                z.lazy(() => ProjectUpdateWithoutLeadInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutLeadInputSchema)
            ])
            .optional()
    })
    .strict()

export default ProjectUpdateOneRequiredWithoutLeadNestedInputSchema
