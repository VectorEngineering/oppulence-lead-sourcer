import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutInboxInputSchema } from './ProjectUpdateWithoutInboxInputSchema';
import { ProjectUncheckedUpdateWithoutInboxInputSchema } from './ProjectUncheckedUpdateWithoutInboxInputSchema';
import { ProjectCreateWithoutInboxInputSchema } from './ProjectCreateWithoutInboxInputSchema';
import { ProjectUncheckedCreateWithoutInboxInputSchema } from './ProjectUncheckedCreateWithoutInboxInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutInboxInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutInboxInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutInboxInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutInboxInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutInboxInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInboxInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutInboxInputSchema;
