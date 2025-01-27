import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutLeadInputSchema } from './ProjectCreateWithoutLeadInputSchema';
import { ProjectUncheckedCreateWithoutLeadInputSchema } from './ProjectUncheckedCreateWithoutLeadInputSchema';

export const ProjectCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutLeadInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutLeadInputSchema;
