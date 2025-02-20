import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectInviteCreateWithoutProjectInputSchema } from './ProjectInviteCreateWithoutProjectInputSchema';
import { ProjectInviteUncheckedCreateWithoutProjectInputSchema } from './ProjectInviteUncheckedCreateWithoutProjectInputSchema';
import { ProjectInviteCreateOrConnectWithoutProjectInputSchema } from './ProjectInviteCreateOrConnectWithoutProjectInputSchema';
import { ProjectInviteUpsertWithWhereUniqueWithoutProjectInputSchema } from './ProjectInviteUpsertWithWhereUniqueWithoutProjectInputSchema';
import { ProjectInviteCreateManyProjectInputEnvelopeSchema } from './ProjectInviteCreateManyProjectInputEnvelopeSchema';
import { ProjectInviteWhereUniqueInputSchema } from './ProjectInviteWhereUniqueInputSchema';
import { ProjectInviteUpdateWithWhereUniqueWithoutProjectInputSchema } from './ProjectInviteUpdateWithWhereUniqueWithoutProjectInputSchema';
import { ProjectInviteUpdateManyWithWhereWithoutProjectInputSchema } from './ProjectInviteUpdateManyWithWhereWithoutProjectInputSchema';
import { ProjectInviteScalarWhereInputSchema } from './ProjectInviteScalarWhereInputSchema';

export const ProjectInviteUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.ProjectInviteUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectInviteCreateWithoutProjectInputSchema),z.lazy(() => ProjectInviteCreateWithoutProjectInputSchema).array(),z.lazy(() => ProjectInviteUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ProjectInviteUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectInviteCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ProjectInviteCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectInviteUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ProjectInviteUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectInviteCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectInviteWhereUniqueInputSchema),z.lazy(() => ProjectInviteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectInviteWhereUniqueInputSchema),z.lazy(() => ProjectInviteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectInviteWhereUniqueInputSchema),z.lazy(() => ProjectInviteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectInviteWhereUniqueInputSchema),z.lazy(() => ProjectInviteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectInviteUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ProjectInviteUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectInviteUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => ProjectInviteUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectInviteScalarWhereInputSchema),z.lazy(() => ProjectInviteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProjectInviteUpdateManyWithoutProjectNestedInputSchema;
