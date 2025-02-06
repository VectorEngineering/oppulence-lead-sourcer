import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutTransactionEnrichmentInputSchema } from './ProjectUpdateWithoutTransactionEnrichmentInputSchema';
import { ProjectUncheckedUpdateWithoutTransactionEnrichmentInputSchema } from './ProjectUncheckedUpdateWithoutTransactionEnrichmentInputSchema';

export const ProjectUpdateToOneWithWhereWithoutTransactionEnrichmentInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutTransactionEnrichmentInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutTransactionEnrichmentInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTransactionEnrichmentInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutTransactionEnrichmentInputSchema;
