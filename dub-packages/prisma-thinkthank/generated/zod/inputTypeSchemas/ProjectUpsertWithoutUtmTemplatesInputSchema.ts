import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutUtmTemplatesInputSchema } from './ProjectUpdateWithoutUtmTemplatesInputSchema';
import { ProjectUncheckedUpdateWithoutUtmTemplatesInputSchema } from './ProjectUncheckedUpdateWithoutUtmTemplatesInputSchema';
import { ProjectCreateWithoutUtmTemplatesInputSchema } from './ProjectCreateWithoutUtmTemplatesInputSchema';
import { ProjectUncheckedCreateWithoutUtmTemplatesInputSchema } from './ProjectUncheckedCreateWithoutUtmTemplatesInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutUtmTemplatesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutUtmTemplatesInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutUtmTemplatesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutUtmTemplatesInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutUtmTemplatesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutUtmTemplatesInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutUtmTemplatesInputSchema;
