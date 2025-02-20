import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutDomainsInputSchema } from './ProjectCreateWithoutDomainsInputSchema'
import { ProjectUncheckedCreateWithoutDomainsInputSchema } from './ProjectUncheckedCreateWithoutDomainsInputSchema'
import { ProjectCreateOrConnectWithoutDomainsInputSchema } from './ProjectCreateOrConnectWithoutDomainsInputSchema'
import { ProjectUpsertWithoutDomainsInputSchema } from './ProjectUpsertWithoutDomainsInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutDomainsInputSchema } from './ProjectUpdateToOneWithWhereWithoutDomainsInputSchema'
import { ProjectUpdateWithoutDomainsInputSchema } from './ProjectUpdateWithoutDomainsInputSchema'
import { ProjectUncheckedUpdateWithoutDomainsInputSchema } from './ProjectUncheckedUpdateWithoutDomainsInputSchema'

export const ProjectUpdateOneWithoutDomainsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutDomainsNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutDomainsInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutDomainsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDomainsInputSchema).optional(),
        upsert: z.lazy(() => ProjectUpsertWithoutDomainsInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => ProjectUpdateToOneWithWhereWithoutDomainsInputSchema),
                z.lazy(() => ProjectUpdateWithoutDomainsInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutDomainsInputSchema)
            ])
            .optional()
    })
    .strict()

export default ProjectUpdateOneWithoutDomainsNestedInputSchema
