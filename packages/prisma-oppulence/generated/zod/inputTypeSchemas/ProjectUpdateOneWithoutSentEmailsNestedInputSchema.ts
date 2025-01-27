import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutSentEmailsInputSchema } from './ProjectCreateWithoutSentEmailsInputSchema'
import { ProjectUncheckedCreateWithoutSentEmailsInputSchema } from './ProjectUncheckedCreateWithoutSentEmailsInputSchema'
import { ProjectCreateOrConnectWithoutSentEmailsInputSchema } from './ProjectCreateOrConnectWithoutSentEmailsInputSchema'
import { ProjectUpsertWithoutSentEmailsInputSchema } from './ProjectUpsertWithoutSentEmailsInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutSentEmailsInputSchema } from './ProjectUpdateToOneWithWhereWithoutSentEmailsInputSchema'
import { ProjectUpdateWithoutSentEmailsInputSchema } from './ProjectUpdateWithoutSentEmailsInputSchema'
import { ProjectUncheckedUpdateWithoutSentEmailsInputSchema } from './ProjectUncheckedUpdateWithoutSentEmailsInputSchema'

export const ProjectUpdateOneWithoutSentEmailsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutSentEmailsNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ProjectCreateWithoutSentEmailsInputSchema),
                z.lazy(() => ProjectUncheckedCreateWithoutSentEmailsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutSentEmailsInputSchema).optional(),
        upsert: z.lazy(() => ProjectUpsertWithoutSentEmailsInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => ProjectUpdateToOneWithWhereWithoutSentEmailsInputSchema),
                z.lazy(() => ProjectUpdateWithoutSentEmailsInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutSentEmailsInputSchema)
            ])
            .optional()
    })
    .strict()

export default ProjectUpdateOneWithoutSentEmailsNestedInputSchema
