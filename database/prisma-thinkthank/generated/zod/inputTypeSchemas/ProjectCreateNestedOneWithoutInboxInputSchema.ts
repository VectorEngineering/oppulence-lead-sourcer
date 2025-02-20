import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutInboxInputSchema } from './ProjectCreateWithoutInboxInputSchema'
import { ProjectUncheckedCreateWithoutInboxInputSchema } from './ProjectUncheckedCreateWithoutInboxInputSchema'
import { ProjectCreateOrConnectWithoutInboxInputSchema } from './ProjectCreateOrConnectWithoutInboxInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutInboxInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutInboxInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutInboxInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutInboxInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutInboxInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutInboxInputSchema
