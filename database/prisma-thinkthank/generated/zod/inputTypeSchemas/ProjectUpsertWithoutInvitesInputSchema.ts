import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutInvitesInputSchema } from './ProjectUpdateWithoutInvitesInputSchema';
import { ProjectUncheckedUpdateWithoutInvitesInputSchema } from './ProjectUncheckedUpdateWithoutInvitesInputSchema';
import { ProjectCreateWithoutInvitesInputSchema } from './ProjectCreateWithoutInvitesInputSchema';
import { ProjectUncheckedCreateWithoutInvitesInputSchema } from './ProjectUncheckedCreateWithoutInvitesInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutInvitesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutInvitesInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutInvitesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutInvitesInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutInvitesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInvitesInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutInvitesInputSchema;
