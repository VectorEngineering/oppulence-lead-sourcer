import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutInvoicesInputSchema } from './ProjectCreateWithoutInvoicesInputSchema'
import { ProjectUncheckedCreateWithoutInvoicesInputSchema } from './ProjectUncheckedCreateWithoutInvoicesInputSchema'
import { ProjectCreateOrConnectWithoutInvoicesInputSchema } from './ProjectCreateOrConnectWithoutInvoicesInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutInvoicesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutInvoicesInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutInvoicesInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutInvoicesInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutInvoicesInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutInvoicesInputSchema
