import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutTransactionEnrichmentInputSchema } from './ProjectCreateWithoutTransactionEnrichmentInputSchema';
import { ProjectUncheckedCreateWithoutTransactionEnrichmentInputSchema } from './ProjectUncheckedCreateWithoutTransactionEnrichmentInputSchema';
import { ProjectCreateOrConnectWithoutTransactionEnrichmentInputSchema } from './ProjectCreateOrConnectWithoutTransactionEnrichmentInputSchema';
import { ProjectUpsertWithoutTransactionEnrichmentInputSchema } from './ProjectUpsertWithoutTransactionEnrichmentInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutTransactionEnrichmentInputSchema } from './ProjectUpdateToOneWithWhereWithoutTransactionEnrichmentInputSchema';
import { ProjectUpdateWithoutTransactionEnrichmentInputSchema } from './ProjectUpdateWithoutTransactionEnrichmentInputSchema';
import { ProjectUncheckedUpdateWithoutTransactionEnrichmentInputSchema } from './ProjectUncheckedUpdateWithoutTransactionEnrichmentInputSchema';

export const ProjectUpdateOneRequiredWithoutTransactionEnrichmentNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutTransactionEnrichmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTransactionEnrichmentInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTransactionEnrichmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTransactionEnrichmentInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutTransactionEnrichmentInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutTransactionEnrichmentInputSchema),z.lazy(() => ProjectUpdateWithoutTransactionEnrichmentInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTransactionEnrichmentInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutTransactionEnrichmentNestedInputSchema;
