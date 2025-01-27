import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutSentEmailsInputSchema } from './ProjectUpdateWithoutSentEmailsInputSchema';
import { ProjectUncheckedUpdateWithoutSentEmailsInputSchema } from './ProjectUncheckedUpdateWithoutSentEmailsInputSchema';
import { ProjectCreateWithoutSentEmailsInputSchema } from './ProjectCreateWithoutSentEmailsInputSchema';
import { ProjectUncheckedCreateWithoutSentEmailsInputSchema } from './ProjectUncheckedCreateWithoutSentEmailsInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutSentEmailsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutSentEmailsInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutSentEmailsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutSentEmailsInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutSentEmailsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutSentEmailsInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutSentEmailsInputSchema;
