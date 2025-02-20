import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutDocumentInputSchema } from './ProjectCreateWithoutDocumentInputSchema'
import { ProjectUncheckedCreateWithoutDocumentInputSchema } from './ProjectUncheckedCreateWithoutDocumentInputSchema'
import { ProjectCreateOrConnectWithoutDocumentInputSchema } from './ProjectCreateOrConnectWithoutDocumentInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutDocumentInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutDocumentInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutDocumentInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutDocumentInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDocumentInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutDocumentInputSchema
