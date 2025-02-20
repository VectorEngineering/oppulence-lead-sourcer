import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUsersCreateWithoutProjectInputSchema } from './ProjectUsersCreateWithoutProjectInputSchema';
import { ProjectUsersUncheckedCreateWithoutProjectInputSchema } from './ProjectUsersUncheckedCreateWithoutProjectInputSchema';
import { ProjectUsersCreateOrConnectWithoutProjectInputSchema } from './ProjectUsersCreateOrConnectWithoutProjectInputSchema';
import { ProjectUsersUpsertWithWhereUniqueWithoutProjectInputSchema } from './ProjectUsersUpsertWithWhereUniqueWithoutProjectInputSchema';
import { ProjectUsersCreateManyProjectInputEnvelopeSchema } from './ProjectUsersCreateManyProjectInputEnvelopeSchema';
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema';
import { ProjectUsersUpdateWithWhereUniqueWithoutProjectInputSchema } from './ProjectUsersUpdateWithWhereUniqueWithoutProjectInputSchema';
import { ProjectUsersUpdateManyWithWhereWithoutProjectInputSchema } from './ProjectUsersUpdateManyWithWhereWithoutProjectInputSchema';
import { ProjectUsersScalarWhereInputSchema } from './ProjectUsersScalarWhereInputSchema';

export const ProjectUsersUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.ProjectUsersUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectUsersCreateWithoutProjectInputSchema),z.lazy(() => ProjectUsersCreateWithoutProjectInputSchema).array(),z.lazy(() => ProjectUsersUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ProjectUsersUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectUsersCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ProjectUsersCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectUsersUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ProjectUsersUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectUsersCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectUsersWhereUniqueInputSchema),z.lazy(() => ProjectUsersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectUsersWhereUniqueInputSchema),z.lazy(() => ProjectUsersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectUsersWhereUniqueInputSchema),z.lazy(() => ProjectUsersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectUsersWhereUniqueInputSchema),z.lazy(() => ProjectUsersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectUsersUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => ProjectUsersUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectUsersUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => ProjectUsersUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectUsersScalarWhereInputSchema),z.lazy(() => ProjectUsersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProjectUsersUpdateManyWithoutProjectNestedInputSchema;
