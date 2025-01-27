import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutInvoiceTemplateInputSchema } from './ProjectCreateWithoutInvoiceTemplateInputSchema'
import { ProjectUncheckedCreateWithoutInvoiceTemplateInputSchema } from './ProjectUncheckedCreateWithoutInvoiceTemplateInputSchema'
import { ProjectCreateOrConnectWithoutInvoiceTemplateInputSchema } from './ProjectCreateOrConnectWithoutInvoiceTemplateInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutInvoiceTemplateInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutInvoiceTemplateInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutInvoiceTemplateInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutInvoiceTemplateInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutInvoiceTemplateInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
        })
        .strict()

export default ProjectCreateNestedOneWithoutInvoiceTemplateInputSchema
