import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutTransactionInputSchema } from './ProjectCreateWithoutTransactionInputSchema';
import { ProjectUncheckedCreateWithoutTransactionInputSchema } from './ProjectUncheckedCreateWithoutTransactionInputSchema';
import { ProjectCreateOrConnectWithoutTransactionInputSchema } from './ProjectCreateOrConnectWithoutTransactionInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutTransactionInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutTransactionInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTransactionInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTransactionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTransactionInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutTransactionInputSchema;
