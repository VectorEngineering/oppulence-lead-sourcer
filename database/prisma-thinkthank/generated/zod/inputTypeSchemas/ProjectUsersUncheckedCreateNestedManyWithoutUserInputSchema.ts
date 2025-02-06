import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUsersCreateWithoutUserInputSchema } from './ProjectUsersCreateWithoutUserInputSchema';
import { ProjectUsersUncheckedCreateWithoutUserInputSchema } from './ProjectUsersUncheckedCreateWithoutUserInputSchema';
import { ProjectUsersCreateOrConnectWithoutUserInputSchema } from './ProjectUsersCreateOrConnectWithoutUserInputSchema';
import { ProjectUsersCreateManyUserInputEnvelopeSchema } from './ProjectUsersCreateManyUserInputEnvelopeSchema';
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema';

export const ProjectUsersUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ProjectUsersUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ProjectUsersCreateWithoutUserInputSchema),z.lazy(() => ProjectUsersCreateWithoutUserInputSchema).array(),z.lazy(() => ProjectUsersUncheckedCreateWithoutUserInputSchema),z.lazy(() => ProjectUsersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectUsersCreateOrConnectWithoutUserInputSchema),z.lazy(() => ProjectUsersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectUsersCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectUsersWhereUniqueInputSchema),z.lazy(() => ProjectUsersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProjectUsersUncheckedCreateNestedManyWithoutUserInputSchema;
