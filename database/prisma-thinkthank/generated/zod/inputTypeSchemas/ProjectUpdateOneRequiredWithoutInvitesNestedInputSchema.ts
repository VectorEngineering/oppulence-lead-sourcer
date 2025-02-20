import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutInvitesInputSchema } from './ProjectCreateWithoutInvitesInputSchema';
import { ProjectUncheckedCreateWithoutInvitesInputSchema } from './ProjectUncheckedCreateWithoutInvitesInputSchema';
import { ProjectCreateOrConnectWithoutInvitesInputSchema } from './ProjectCreateOrConnectWithoutInvitesInputSchema';
import { ProjectUpsertWithoutInvitesInputSchema } from './ProjectUpsertWithoutInvitesInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutInvitesInputSchema } from './ProjectUpdateToOneWithWhereWithoutInvitesInputSchema';
import { ProjectUpdateWithoutInvitesInputSchema } from './ProjectUpdateWithoutInvitesInputSchema';
import { ProjectUncheckedUpdateWithoutInvitesInputSchema } from './ProjectUncheckedUpdateWithoutInvitesInputSchema';

export const ProjectUpdateOneRequiredWithoutInvitesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutInvitesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutInvitesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInvitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutInvitesInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutInvitesInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutInvitesInputSchema),z.lazy(() => ProjectUpdateWithoutInvitesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutInvitesInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutInvitesNestedInputSchema;
