import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutProgramsInputSchema } from './ProjectCreateWithoutProgramsInputSchema'
import { ProjectUncheckedCreateWithoutProgramsInputSchema } from './ProjectUncheckedCreateWithoutProgramsInputSchema'
import { ProjectCreateOrConnectWithoutProgramsInputSchema } from './ProjectCreateOrConnectWithoutProgramsInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutProgramsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutProgramsInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutProgramsInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutProgramsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutProgramsInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutProgramsInputSchema
