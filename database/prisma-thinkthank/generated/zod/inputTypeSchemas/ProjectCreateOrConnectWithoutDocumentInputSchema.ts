import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutDocumentInputSchema } from './ProjectCreateWithoutDocumentInputSchema'
import { ProjectUncheckedCreateWithoutDocumentInputSchema } from './ProjectUncheckedCreateWithoutDocumentInputSchema'

export const ProjectCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutDocumentInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutDocumentInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutDocumentInputSchema)
        ])
    })
    .strict()

export default ProjectCreateOrConnectWithoutDocumentInputSchema
