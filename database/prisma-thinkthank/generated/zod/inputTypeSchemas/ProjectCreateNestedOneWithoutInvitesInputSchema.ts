import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutInvitesInputSchema } from './ProjectCreateWithoutInvitesInputSchema';
import { ProjectUncheckedCreateWithoutInvitesInputSchema } from './ProjectUncheckedCreateWithoutInvitesInputSchema';
import { ProjectCreateOrConnectWithoutInvitesInputSchema } from './ProjectCreateOrConnectWithoutInvitesInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutInvitesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutInvitesInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutInvitesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInvitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutInvitesInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutInvitesInputSchema;
