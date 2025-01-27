import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutUtmTemplatesInputSchema } from './ProjectCreateWithoutUtmTemplatesInputSchema';
import { ProjectUncheckedCreateWithoutUtmTemplatesInputSchema } from './ProjectUncheckedCreateWithoutUtmTemplatesInputSchema';

export const ProjectCreateOrConnectWithoutUtmTemplatesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutUtmTemplatesInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutUtmTemplatesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutUtmTemplatesInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutUtmTemplatesInputSchema;
