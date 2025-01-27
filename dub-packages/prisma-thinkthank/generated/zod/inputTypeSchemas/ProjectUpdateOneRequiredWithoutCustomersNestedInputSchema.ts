import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutCustomersInputSchema } from './ProjectCreateWithoutCustomersInputSchema';
import { ProjectUncheckedCreateWithoutCustomersInputSchema } from './ProjectUncheckedCreateWithoutCustomersInputSchema';
import { ProjectCreateOrConnectWithoutCustomersInputSchema } from './ProjectCreateOrConnectWithoutCustomersInputSchema';
import { ProjectUpsertWithoutCustomersInputSchema } from './ProjectUpsertWithoutCustomersInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutCustomersInputSchema } from './ProjectUpdateToOneWithWhereWithoutCustomersInputSchema';
import { ProjectUpdateWithoutCustomersInputSchema } from './ProjectUpdateWithoutCustomersInputSchema';
import { ProjectUncheckedUpdateWithoutCustomersInputSchema } from './ProjectUncheckedUpdateWithoutCustomersInputSchema';

export const ProjectUpdateOneRequiredWithoutCustomersNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutCustomersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutCustomersInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutCustomersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutCustomersInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutCustomersInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutCustomersInputSchema),z.lazy(() => ProjectUpdateWithoutCustomersInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutCustomersInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutCustomersNestedInputSchema;
