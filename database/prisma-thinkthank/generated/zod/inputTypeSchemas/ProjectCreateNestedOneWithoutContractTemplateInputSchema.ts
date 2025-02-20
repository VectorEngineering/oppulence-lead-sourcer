import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutContractTemplateInputSchema } from './ProjectCreateWithoutContractTemplateInputSchema'
import { ProjectUncheckedCreateWithoutContractTemplateInputSchema } from './ProjectUncheckedCreateWithoutContractTemplateInputSchema'
import { ProjectCreateOrConnectWithoutContractTemplateInputSchema } from './ProjectCreateOrConnectWithoutContractTemplateInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutContractTemplateInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutContractTemplateInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutContractTemplateInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutContractTemplateInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutContractTemplateInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
        })
        .strict()

export default ProjectCreateNestedOneWithoutContractTemplateInputSchema
