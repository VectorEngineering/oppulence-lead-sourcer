import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutInvoicesInputSchema } from './ProjectCreateWithoutInvoicesInputSchema'
import { ProjectUncheckedCreateWithoutInvoicesInputSchema } from './ProjectUncheckedCreateWithoutInvoicesInputSchema'
import { ProjectCreateOrConnectWithoutInvoicesInputSchema } from './ProjectCreateOrConnectWithoutInvoicesInputSchema'
import { ProjectUpsertWithoutInvoicesInputSchema } from './ProjectUpsertWithoutInvoicesInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutInvoicesInputSchema } from './ProjectUpdateToOneWithWhereWithoutInvoicesInputSchema'
import { ProjectUpdateWithoutInvoicesInputSchema } from './ProjectUpdateWithoutInvoicesInputSchema'
import { ProjectUncheckedUpdateWithoutInvoicesInputSchema } from './ProjectUncheckedUpdateWithoutInvoicesInputSchema'

export const ProjectUpdateOneRequiredWithoutInvoicesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutInvoicesNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutInvoicesInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutInvoicesInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutInvoicesInputSchema).optional(),
            upsert: z.lazy(() => ProjectUpsertWithoutInvoicesInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ProjectUpdateToOneWithWhereWithoutInvoicesInputSchema),
                    z.lazy(() => ProjectUpdateWithoutInvoicesInputSchema),
                    z.lazy(() => ProjectUncheckedUpdateWithoutInvoicesInputSchema)
                ])
                .optional()
        })
        .strict()

export default ProjectUpdateOneRequiredWithoutInvoicesNestedInputSchema
