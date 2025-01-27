import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutLeadInputSchema } from './ProjectCreateWithoutLeadInputSchema'
import { ProjectUncheckedCreateWithoutLeadInputSchema } from './ProjectUncheckedCreateWithoutLeadInputSchema'
import { ProjectCreateOrConnectWithoutLeadInputSchema } from './ProjectCreateOrConnectWithoutLeadInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutLeadInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutLeadInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutLeadInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutLeadInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutLeadInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutLeadInputSchema
