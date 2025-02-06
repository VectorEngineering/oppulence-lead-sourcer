import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutDocumentInputSchema } from './ProjectUpdateWithoutDocumentInputSchema';
import { ProjectUncheckedUpdateWithoutDocumentInputSchema } from './ProjectUncheckedUpdateWithoutDocumentInputSchema';
import { ProjectCreateWithoutDocumentInputSchema } from './ProjectCreateWithoutDocumentInputSchema';
import { ProjectUncheckedCreateWithoutDocumentInputSchema } from './ProjectUncheckedCreateWithoutDocumentInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutDocumentInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutDocumentInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutDocumentInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutDocumentInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutDocumentInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutDocumentInputSchema;
