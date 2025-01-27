import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutInvoicesInputSchema } from './ProjectUpdateWithoutInvoicesInputSchema';
import { ProjectUncheckedUpdateWithoutInvoicesInputSchema } from './ProjectUncheckedUpdateWithoutInvoicesInputSchema';
import { ProjectCreateWithoutInvoicesInputSchema } from './ProjectCreateWithoutInvoicesInputSchema';
import { ProjectUncheckedCreateWithoutInvoicesInputSchema } from './ProjectUncheckedCreateWithoutInvoicesInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutInvoicesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutInvoicesInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutInvoicesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutInvoicesInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutInvoicesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInvoicesInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutInvoicesInputSchema;
