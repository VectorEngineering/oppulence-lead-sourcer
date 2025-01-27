import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutDefaultDomainsInputSchema } from './ProjectCreateWithoutDefaultDomainsInputSchema';
import { ProjectUncheckedCreateWithoutDefaultDomainsInputSchema } from './ProjectUncheckedCreateWithoutDefaultDomainsInputSchema';
import { ProjectCreateOrConnectWithoutDefaultDomainsInputSchema } from './ProjectCreateOrConnectWithoutDefaultDomainsInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutDefaultDomainsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutDefaultDomainsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutDefaultDomainsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutDefaultDomainsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDefaultDomainsInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutDefaultDomainsInputSchema;
