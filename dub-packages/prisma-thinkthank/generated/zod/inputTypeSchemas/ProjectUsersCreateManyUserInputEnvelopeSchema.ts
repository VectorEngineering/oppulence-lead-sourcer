import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUsersCreateManyUserInputSchema } from './ProjectUsersCreateManyUserInputSchema';

export const ProjectUsersCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ProjectUsersCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectUsersCreateManyUserInputSchema),z.lazy(() => ProjectUsersCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectUsersCreateManyUserInputEnvelopeSchema;
