import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutSentEmailsInputSchema } from './ProjectCreateWithoutSentEmailsInputSchema'
import { ProjectUncheckedCreateWithoutSentEmailsInputSchema } from './ProjectUncheckedCreateWithoutSentEmailsInputSchema'
import { ProjectCreateOrConnectWithoutSentEmailsInputSchema } from './ProjectCreateOrConnectWithoutSentEmailsInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutSentEmailsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutSentEmailsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ProjectCreateWithoutSentEmailsInputSchema),
                z.lazy(() => ProjectUncheckedCreateWithoutSentEmailsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutSentEmailsInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutSentEmailsInputSchema
