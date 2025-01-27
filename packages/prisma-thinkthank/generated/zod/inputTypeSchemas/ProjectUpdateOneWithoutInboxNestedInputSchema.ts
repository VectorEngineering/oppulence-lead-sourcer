import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutInboxInputSchema } from './ProjectCreateWithoutInboxInputSchema';
import { ProjectUncheckedCreateWithoutInboxInputSchema } from './ProjectUncheckedCreateWithoutInboxInputSchema';
import { ProjectCreateOrConnectWithoutInboxInputSchema } from './ProjectCreateOrConnectWithoutInboxInputSchema';
import { ProjectUpsertWithoutInboxInputSchema } from './ProjectUpsertWithoutInboxInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutInboxInputSchema } from './ProjectUpdateToOneWithWhereWithoutInboxInputSchema';
import { ProjectUpdateWithoutInboxInputSchema } from './ProjectUpdateWithoutInboxInputSchema';
import { ProjectUncheckedUpdateWithoutInboxInputSchema } from './ProjectUncheckedUpdateWithoutInboxInputSchema';

export const ProjectUpdateOneWithoutInboxNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutInboxNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutInboxInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutInboxInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutInboxInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutInboxInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutInboxInputSchema),z.lazy(() => ProjectUpdateWithoutInboxInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutInboxInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneWithoutInboxNestedInputSchema;
