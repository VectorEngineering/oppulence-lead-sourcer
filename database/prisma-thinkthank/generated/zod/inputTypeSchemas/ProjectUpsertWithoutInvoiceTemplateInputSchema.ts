import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutInvoiceTemplateInputSchema } from './ProjectUpdateWithoutInvoiceTemplateInputSchema';
import { ProjectUncheckedUpdateWithoutInvoiceTemplateInputSchema } from './ProjectUncheckedUpdateWithoutInvoiceTemplateInputSchema';
import { ProjectCreateWithoutInvoiceTemplateInputSchema } from './ProjectCreateWithoutInvoiceTemplateInputSchema';
import { ProjectUncheckedCreateWithoutInvoiceTemplateInputSchema } from './ProjectUncheckedCreateWithoutInvoiceTemplateInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutInvoiceTemplateInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutInvoiceTemplateInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutInvoiceTemplateInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutInvoiceTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutInvoiceTemplateInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInvoiceTemplateInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutInvoiceTemplateInputSchema;
