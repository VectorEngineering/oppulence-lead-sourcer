import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectInviteWhereUniqueInputSchema } from './ProjectInviteWhereUniqueInputSchema';
import { ProjectInviteUpdateWithoutProjectInputSchema } from './ProjectInviteUpdateWithoutProjectInputSchema';
import { ProjectInviteUncheckedUpdateWithoutProjectInputSchema } from './ProjectInviteUncheckedUpdateWithoutProjectInputSchema';
import { ProjectInviteCreateWithoutProjectInputSchema } from './ProjectInviteCreateWithoutProjectInputSchema';
import { ProjectInviteUncheckedCreateWithoutProjectInputSchema } from './ProjectInviteUncheckedCreateWithoutProjectInputSchema';

export const ProjectInviteUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectInviteUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectInviteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectInviteUpdateWithoutProjectInputSchema),z.lazy(() => ProjectInviteUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectInviteCreateWithoutProjectInputSchema),z.lazy(() => ProjectInviteUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectInviteUpsertWithWhereUniqueWithoutProjectInputSchema;
