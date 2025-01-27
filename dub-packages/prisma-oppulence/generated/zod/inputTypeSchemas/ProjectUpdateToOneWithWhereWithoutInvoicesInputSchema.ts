import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutInvoicesInputSchema } from './ProjectUpdateWithoutInvoicesInputSchema';
import { ProjectUncheckedUpdateWithoutInvoicesInputSchema } from './ProjectUncheckedUpdateWithoutInvoicesInputSchema';

export const ProjectUpdateToOneWithWhereWithoutInvoicesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutInvoicesInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutInvoicesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutInvoicesInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutInvoicesInputSchema;
