import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutTransactionAttachmentInputSchema } from './ProjectCreateWithoutTransactionAttachmentInputSchema'
import { ProjectUncheckedCreateWithoutTransactionAttachmentInputSchema } from './ProjectUncheckedCreateWithoutTransactionAttachmentInputSchema'

export const ProjectCreateOrConnectWithoutTransactionAttachmentInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutTransactionAttachmentInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ProjectCreateWithoutTransactionAttachmentInputSchema),
                z.lazy(() => ProjectUncheckedCreateWithoutTransactionAttachmentInputSchema)
            ])
        })
        .strict()

export default ProjectCreateOrConnectWithoutTransactionAttachmentInputSchema
