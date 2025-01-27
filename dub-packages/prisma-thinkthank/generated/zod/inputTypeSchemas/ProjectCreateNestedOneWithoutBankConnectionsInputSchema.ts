import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutBankConnectionsInputSchema } from './ProjectCreateWithoutBankConnectionsInputSchema';
import { ProjectUncheckedCreateWithoutBankConnectionsInputSchema } from './ProjectUncheckedCreateWithoutBankConnectionsInputSchema';
import { ProjectCreateOrConnectWithoutBankConnectionsInputSchema } from './ProjectCreateOrConnectWithoutBankConnectionsInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutBankConnectionsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutBankConnectionsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutBankConnectionsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutBankConnectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutBankConnectionsInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutBankConnectionsInputSchema;
