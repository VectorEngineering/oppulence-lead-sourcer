import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutTransactionAttachmentInputSchema } from './ProjectCreateWithoutTransactionAttachmentInputSchema'
import { ProjectUncheckedCreateWithoutTransactionAttachmentInputSchema } from './ProjectUncheckedCreateWithoutTransactionAttachmentInputSchema'
import { ProjectCreateOrConnectWithoutTransactionAttachmentInputSchema } from './ProjectCreateOrConnectWithoutTransactionAttachmentInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutTransactionAttachmentInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutTransactionAttachmentInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutTransactionAttachmentInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutTransactionAttachmentInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTransactionAttachmentInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
        })
        .strict()

export default ProjectCreateNestedOneWithoutTransactionAttachmentInputSchema
