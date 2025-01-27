import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectInviteCreateManyProjectInputSchema } from './ProjectInviteCreateManyProjectInputSchema';

export const ProjectInviteCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.ProjectInviteCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectInviteCreateManyProjectInputSchema),z.lazy(() => ProjectInviteCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectInviteCreateManyProjectInputEnvelopeSchema;
