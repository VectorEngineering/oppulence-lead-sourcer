import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutUtmTemplatesInputSchema } from './ProjectCreateWithoutUtmTemplatesInputSchema'
import { ProjectUncheckedCreateWithoutUtmTemplatesInputSchema } from './ProjectUncheckedCreateWithoutUtmTemplatesInputSchema'
import { ProjectCreateOrConnectWithoutUtmTemplatesInputSchema } from './ProjectCreateOrConnectWithoutUtmTemplatesInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutUtmTemplatesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutUtmTemplatesInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ProjectCreateWithoutUtmTemplatesInputSchema),
                z.lazy(() => ProjectUncheckedCreateWithoutUtmTemplatesInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutUtmTemplatesInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutUtmTemplatesInputSchema
