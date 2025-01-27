import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutDomainsInputSchema } from './ProjectCreateWithoutDomainsInputSchema';
import { ProjectUncheckedCreateWithoutDomainsInputSchema } from './ProjectUncheckedCreateWithoutDomainsInputSchema';
import { ProjectCreateOrConnectWithoutDomainsInputSchema } from './ProjectCreateOrConnectWithoutDomainsInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutDomainsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutDomainsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutDomainsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutDomainsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDomainsInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutDomainsInputSchema;
