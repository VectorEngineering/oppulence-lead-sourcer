import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutTransactionInputSchema } from './ProjectUpdateWithoutTransactionInputSchema';
import { ProjectUncheckedUpdateWithoutTransactionInputSchema } from './ProjectUncheckedUpdateWithoutTransactionInputSchema';

export const ProjectUpdateToOneWithWhereWithoutTransactionInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutTransactionInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutTransactionInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTransactionInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutTransactionInputSchema;
