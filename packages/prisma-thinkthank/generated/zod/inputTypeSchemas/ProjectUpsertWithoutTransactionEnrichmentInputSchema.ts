import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutTransactionEnrichmentInputSchema } from './ProjectUpdateWithoutTransactionEnrichmentInputSchema';
import { ProjectUncheckedUpdateWithoutTransactionEnrichmentInputSchema } from './ProjectUncheckedUpdateWithoutTransactionEnrichmentInputSchema';
import { ProjectCreateWithoutTransactionEnrichmentInputSchema } from './ProjectCreateWithoutTransactionEnrichmentInputSchema';
import { ProjectUncheckedCreateWithoutTransactionEnrichmentInputSchema } from './ProjectUncheckedCreateWithoutTransactionEnrichmentInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutTransactionEnrichmentInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutTransactionEnrichmentInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutTransactionEnrichmentInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTransactionEnrichmentInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutTransactionEnrichmentInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTransactionEnrichmentInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutTransactionEnrichmentInputSchema;
