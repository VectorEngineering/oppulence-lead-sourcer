import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutTransactionCategoryInputSchema } from './ProjectCreateWithoutTransactionCategoryInputSchema';
import { ProjectUncheckedCreateWithoutTransactionCategoryInputSchema } from './ProjectUncheckedCreateWithoutTransactionCategoryInputSchema';
import { ProjectCreateOrConnectWithoutTransactionCategoryInputSchema } from './ProjectCreateOrConnectWithoutTransactionCategoryInputSchema';
import { ProjectUpsertWithoutTransactionCategoryInputSchema } from './ProjectUpsertWithoutTransactionCategoryInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutTransactionCategoryInputSchema } from './ProjectUpdateToOneWithWhereWithoutTransactionCategoryInputSchema';
import { ProjectUpdateWithoutTransactionCategoryInputSchema } from './ProjectUpdateWithoutTransactionCategoryInputSchema';
import { ProjectUncheckedUpdateWithoutTransactionCategoryInputSchema } from './ProjectUncheckedUpdateWithoutTransactionCategoryInputSchema';

export const ProjectUpdateOneRequiredWithoutTransactionCategoryNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutTransactionCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTransactionCategoryInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTransactionCategoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTransactionCategoryInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutTransactionCategoryInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutTransactionCategoryInputSchema),z.lazy(() => ProjectUpdateWithoutTransactionCategoryInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTransactionCategoryInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutTransactionCategoryNestedInputSchema;
