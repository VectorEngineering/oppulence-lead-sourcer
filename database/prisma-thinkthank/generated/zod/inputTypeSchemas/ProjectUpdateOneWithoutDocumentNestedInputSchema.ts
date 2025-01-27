import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutDocumentInputSchema } from './ProjectCreateWithoutDocumentInputSchema'
import { ProjectUncheckedCreateWithoutDocumentInputSchema } from './ProjectUncheckedCreateWithoutDocumentInputSchema'
import { ProjectCreateOrConnectWithoutDocumentInputSchema } from './ProjectCreateOrConnectWithoutDocumentInputSchema'
import { ProjectUpsertWithoutDocumentInputSchema } from './ProjectUpsertWithoutDocumentInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutDocumentInputSchema } from './ProjectUpdateToOneWithWhereWithoutDocumentInputSchema'
import { ProjectUpdateWithoutDocumentInputSchema } from './ProjectUpdateWithoutDocumentInputSchema'
import { ProjectUncheckedUpdateWithoutDocumentInputSchema } from './ProjectUncheckedUpdateWithoutDocumentInputSchema'

export const ProjectUpdateOneWithoutDocumentNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutDocumentNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutDocumentInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutDocumentInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDocumentInputSchema).optional(),
        upsert: z.lazy(() => ProjectUpsertWithoutDocumentInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => ProjectUpdateToOneWithWhereWithoutDocumentInputSchema),
                z.lazy(() => ProjectUpdateWithoutDocumentInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutDocumentInputSchema)
            ])
            .optional()
    })
    .strict()

export default ProjectUpdateOneWithoutDocumentNestedInputSchema
