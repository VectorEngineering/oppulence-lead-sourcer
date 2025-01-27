import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutWebhooksInputSchema } from './ProjectUpdateWithoutWebhooksInputSchema';
import { ProjectUncheckedUpdateWithoutWebhooksInputSchema } from './ProjectUncheckedUpdateWithoutWebhooksInputSchema';
import { ProjectCreateWithoutWebhooksInputSchema } from './ProjectCreateWithoutWebhooksInputSchema';
import { ProjectUncheckedCreateWithoutWebhooksInputSchema } from './ProjectUncheckedCreateWithoutWebhooksInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutWebhooksInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutWebhooksInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutWebhooksInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutWebhooksInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutWebhooksInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutWebhooksInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutWebhooksInputSchema;
