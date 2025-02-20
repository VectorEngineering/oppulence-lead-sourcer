import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutLinksInputSchema } from './ProjectCreateWithoutLinksInputSchema'
import { ProjectUncheckedCreateWithoutLinksInputSchema } from './ProjectUncheckedCreateWithoutLinksInputSchema'
import { ProjectCreateOrConnectWithoutLinksInputSchema } from './ProjectCreateOrConnectWithoutLinksInputSchema'
import { ProjectUpsertWithoutLinksInputSchema } from './ProjectUpsertWithoutLinksInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutLinksInputSchema } from './ProjectUpdateToOneWithWhereWithoutLinksInputSchema'
import { ProjectUpdateWithoutLinksInputSchema } from './ProjectUpdateWithoutLinksInputSchema'
import { ProjectUncheckedUpdateWithoutLinksInputSchema } from './ProjectUncheckedUpdateWithoutLinksInputSchema'

export const ProjectUpdateOneWithoutLinksNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutLinksNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutLinksInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutLinksInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutLinksInputSchema).optional(),
        upsert: z.lazy(() => ProjectUpsertWithoutLinksInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => ProjectUpdateToOneWithWhereWithoutLinksInputSchema),
                z.lazy(() => ProjectUpdateWithoutLinksInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutLinksInputSchema)
            ])
            .optional()
    })
    .strict()

export default ProjectUpdateOneWithoutLinksNestedInputSchema
