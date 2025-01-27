import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUsersCreateManyProjectInputSchema } from './ProjectUsersCreateManyProjectInputSchema';

export const ProjectUsersCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.ProjectUsersCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectUsersCreateManyProjectInputSchema),z.lazy(() => ProjectUsersCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectUsersCreateManyProjectInputEnvelopeSchema;
