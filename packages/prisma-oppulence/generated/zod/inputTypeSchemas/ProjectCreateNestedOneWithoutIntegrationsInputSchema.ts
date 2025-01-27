import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutIntegrationsInputSchema } from './ProjectCreateWithoutIntegrationsInputSchema';
import { ProjectUncheckedCreateWithoutIntegrationsInputSchema } from './ProjectUncheckedCreateWithoutIntegrationsInputSchema';
import { ProjectCreateOrConnectWithoutIntegrationsInputSchema } from './ProjectCreateOrConnectWithoutIntegrationsInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutIntegrationsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutIntegrationsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutIntegrationsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutIntegrationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutIntegrationsInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutIntegrationsInputSchema;
