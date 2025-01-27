import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutInvoiceTemplateInputSchema } from './ProjectCreateWithoutInvoiceTemplateInputSchema';
import { ProjectUncheckedCreateWithoutInvoiceTemplateInputSchema } from './ProjectUncheckedCreateWithoutInvoiceTemplateInputSchema';

export const ProjectCreateOrConnectWithoutInvoiceTemplateInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutInvoiceTemplateInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutInvoiceTemplateInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInvoiceTemplateInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutInvoiceTemplateInputSchema;
