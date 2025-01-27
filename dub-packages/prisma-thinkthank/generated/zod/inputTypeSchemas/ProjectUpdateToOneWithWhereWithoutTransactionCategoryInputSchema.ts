import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutTransactionCategoryInputSchema } from './ProjectUpdateWithoutTransactionCategoryInputSchema';
import { ProjectUncheckedUpdateWithoutTransactionCategoryInputSchema } from './ProjectUncheckedUpdateWithoutTransactionCategoryInputSchema';

export const ProjectUpdateToOneWithWhereWithoutTransactionCategoryInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutTransactionCategoryInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutTransactionCategoryInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTransactionCategoryInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutTransactionCategoryInputSchema;
