import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutProgramsInputSchema } from './ProjectCreateWithoutProgramsInputSchema'
import { ProjectUncheckedCreateWithoutProgramsInputSchema } from './ProjectUncheckedCreateWithoutProgramsInputSchema'
import { ProjectCreateOrConnectWithoutProgramsInputSchema } from './ProjectCreateOrConnectWithoutProgramsInputSchema'
import { ProjectUpsertWithoutProgramsInputSchema } from './ProjectUpsertWithoutProgramsInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutProgramsInputSchema } from './ProjectUpdateToOneWithWhereWithoutProgramsInputSchema'
import { ProjectUpdateWithoutProgramsInputSchema } from './ProjectUpdateWithoutProgramsInputSchema'
import { ProjectUncheckedUpdateWithoutProgramsInputSchema } from './ProjectUncheckedUpdateWithoutProgramsInputSchema'

export const ProjectUpdateOneRequiredWithoutProgramsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutProgramsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutProgramsInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutProgramsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutProgramsInputSchema).optional(),
            upsert: z.lazy(() => ProjectUpsertWithoutProgramsInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ProjectUpdateToOneWithWhereWithoutProgramsInputSchema),
                    z.lazy(() => ProjectUpdateWithoutProgramsInputSchema),
                    z.lazy(() => ProjectUncheckedUpdateWithoutProgramsInputSchema)
                ])
                .optional()
        })
        .strict()

export default ProjectUpdateOneRequiredWithoutProgramsNestedInputSchema
