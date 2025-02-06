import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutTransactionInputSchema } from './ProjectCreateWithoutTransactionInputSchema';
import { ProjectUncheckedCreateWithoutTransactionInputSchema } from './ProjectUncheckedCreateWithoutTransactionInputSchema';
import { ProjectCreateOrConnectWithoutTransactionInputSchema } from './ProjectCreateOrConnectWithoutTransactionInputSchema';
import { ProjectUpsertWithoutTransactionInputSchema } from './ProjectUpsertWithoutTransactionInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutTransactionInputSchema } from './ProjectUpdateToOneWithWhereWithoutTransactionInputSchema';
import { ProjectUpdateWithoutTransactionInputSchema } from './ProjectUpdateWithoutTransactionInputSchema';
import { ProjectUncheckedUpdateWithoutTransactionInputSchema } from './ProjectUncheckedUpdateWithoutTransactionInputSchema';

export const ProjectUpdateOneRequiredWithoutTransactionNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutTransactionNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTransactionInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTransactionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTransactionInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutTransactionInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutTransactionInputSchema),z.lazy(() => ProjectUpdateWithoutTransactionInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTransactionInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutTransactionNestedInputSchema;
