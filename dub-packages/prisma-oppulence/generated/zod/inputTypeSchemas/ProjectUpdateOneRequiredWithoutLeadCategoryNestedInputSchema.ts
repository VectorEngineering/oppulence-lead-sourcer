import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutLeadCategoryInputSchema } from './ProjectCreateWithoutLeadCategoryInputSchema';
import { ProjectUncheckedCreateWithoutLeadCategoryInputSchema } from './ProjectUncheckedCreateWithoutLeadCategoryInputSchema';
import { ProjectCreateOrConnectWithoutLeadCategoryInputSchema } from './ProjectCreateOrConnectWithoutLeadCategoryInputSchema';
import { ProjectUpsertWithoutLeadCategoryInputSchema } from './ProjectUpsertWithoutLeadCategoryInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutLeadCategoryInputSchema } from './ProjectUpdateToOneWithWhereWithoutLeadCategoryInputSchema';
import { ProjectUpdateWithoutLeadCategoryInputSchema } from './ProjectUpdateWithoutLeadCategoryInputSchema';
import { ProjectUncheckedUpdateWithoutLeadCategoryInputSchema } from './ProjectUncheckedUpdateWithoutLeadCategoryInputSchema';

export const ProjectUpdateOneRequiredWithoutLeadCategoryNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutLeadCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutLeadCategoryInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutLeadCategoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutLeadCategoryInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutLeadCategoryInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutLeadCategoryInputSchema),z.lazy(() => ProjectUpdateWithoutLeadCategoryInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutLeadCategoryInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutLeadCategoryNestedInputSchema;
