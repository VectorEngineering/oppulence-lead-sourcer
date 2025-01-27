import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutInvoiceTemplateInputSchema } from './ProjectCreateWithoutInvoiceTemplateInputSchema';
import { ProjectUncheckedCreateWithoutInvoiceTemplateInputSchema } from './ProjectUncheckedCreateWithoutInvoiceTemplateInputSchema';
import { ProjectCreateOrConnectWithoutInvoiceTemplateInputSchema } from './ProjectCreateOrConnectWithoutInvoiceTemplateInputSchema';
import { ProjectUpsertWithoutInvoiceTemplateInputSchema } from './ProjectUpsertWithoutInvoiceTemplateInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutInvoiceTemplateInputSchema } from './ProjectUpdateToOneWithWhereWithoutInvoiceTemplateInputSchema';
import { ProjectUpdateWithoutInvoiceTemplateInputSchema } from './ProjectUpdateWithoutInvoiceTemplateInputSchema';
import { ProjectUncheckedUpdateWithoutInvoiceTemplateInputSchema } from './ProjectUncheckedUpdateWithoutInvoiceTemplateInputSchema';

export const ProjectUpdateOneRequiredWithoutInvoiceTemplateNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutInvoiceTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutInvoiceTemplateInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInvoiceTemplateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutInvoiceTemplateInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutInvoiceTemplateInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutInvoiceTemplateInputSchema),z.lazy(() => ProjectUpdateWithoutInvoiceTemplateInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutInvoiceTemplateInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutInvoiceTemplateNestedInputSchema;
