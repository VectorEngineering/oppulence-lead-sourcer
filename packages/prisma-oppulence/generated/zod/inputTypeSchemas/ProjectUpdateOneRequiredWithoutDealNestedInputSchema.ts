import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutDealInputSchema } from './ProjectCreateWithoutDealInputSchema';
import { ProjectUncheckedCreateWithoutDealInputSchema } from './ProjectUncheckedCreateWithoutDealInputSchema';
import { ProjectCreateOrConnectWithoutDealInputSchema } from './ProjectCreateOrConnectWithoutDealInputSchema';
import { ProjectUpsertWithoutDealInputSchema } from './ProjectUpsertWithoutDealInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutDealInputSchema } from './ProjectUpdateToOneWithWhereWithoutDealInputSchema';
import { ProjectUpdateWithoutDealInputSchema } from './ProjectUpdateWithoutDealInputSchema';
import { ProjectUncheckedUpdateWithoutDealInputSchema } from './ProjectUncheckedUpdateWithoutDealInputSchema';

export const ProjectUpdateOneRequiredWithoutDealNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutDealNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutDealInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutDealInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDealInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutDealInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutDealInputSchema),z.lazy(() => ProjectUpdateWithoutDealInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutDealInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutDealNestedInputSchema;
