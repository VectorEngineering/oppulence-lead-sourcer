import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutSentEmailsInputSchema } from './ProjectCreateWithoutSentEmailsInputSchema';
import { ProjectUncheckedCreateWithoutSentEmailsInputSchema } from './ProjectUncheckedCreateWithoutSentEmailsInputSchema';

export const ProjectCreateOrConnectWithoutSentEmailsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutSentEmailsInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutSentEmailsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutSentEmailsInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutSentEmailsInputSchema;
