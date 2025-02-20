import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutInvoiceTemplateInputSchema } from './ProjectUpdateWithoutInvoiceTemplateInputSchema'
import { ProjectUncheckedUpdateWithoutInvoiceTemplateInputSchema } from './ProjectUncheckedUpdateWithoutInvoiceTemplateInputSchema'

export const ProjectUpdateToOneWithWhereWithoutInvoiceTemplateInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutInvoiceTemplateInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ProjectUpdateWithoutInvoiceTemplateInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutInvoiceTemplateInputSchema)
            ])
        })
        .strict()

export default ProjectUpdateToOneWithWhereWithoutInvoiceTemplateInputSchema
