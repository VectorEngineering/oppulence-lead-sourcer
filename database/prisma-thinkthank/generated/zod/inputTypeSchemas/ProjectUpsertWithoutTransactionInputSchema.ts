import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutTransactionInputSchema } from './ProjectUpdateWithoutTransactionInputSchema';
import { ProjectUncheckedUpdateWithoutTransactionInputSchema } from './ProjectUncheckedUpdateWithoutTransactionInputSchema';
import { ProjectCreateWithoutTransactionInputSchema } from './ProjectCreateWithoutTransactionInputSchema';
import { ProjectUncheckedCreateWithoutTransactionInputSchema } from './ProjectUncheckedCreateWithoutTransactionInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutTransactionInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutTransactionInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutTransactionInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTransactionInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutTransactionInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTransactionInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutTransactionInputSchema;
