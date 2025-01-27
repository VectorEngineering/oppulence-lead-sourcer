import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutTagsInputSchema } from './ProjectCreateWithoutTagsInputSchema';
import { ProjectUncheckedCreateWithoutTagsInputSchema } from './ProjectUncheckedCreateWithoutTagsInputSchema';
import { ProjectCreateOrConnectWithoutTagsInputSchema } from './ProjectCreateOrConnectWithoutTagsInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTagsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutTagsInputSchema;
