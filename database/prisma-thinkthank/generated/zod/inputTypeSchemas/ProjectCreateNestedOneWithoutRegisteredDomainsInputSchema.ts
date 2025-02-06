import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutRegisteredDomainsInputSchema } from './ProjectCreateWithoutRegisteredDomainsInputSchema';
import { ProjectUncheckedCreateWithoutRegisteredDomainsInputSchema } from './ProjectUncheckedCreateWithoutRegisteredDomainsInputSchema';
import { ProjectCreateOrConnectWithoutRegisteredDomainsInputSchema } from './ProjectCreateOrConnectWithoutRegisteredDomainsInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutRegisteredDomainsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutRegisteredDomainsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutRegisteredDomainsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutRegisteredDomainsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutRegisteredDomainsInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutRegisteredDomainsInputSchema;
