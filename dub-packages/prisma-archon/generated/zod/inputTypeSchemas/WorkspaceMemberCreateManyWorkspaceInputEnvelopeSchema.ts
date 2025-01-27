import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceMemberCreateManyWorkspaceInputSchema } from './WorkspaceMemberCreateManyWorkspaceInputSchema';

export const WorkspaceMemberCreateManyWorkspaceInputEnvelopeSchema: z.ZodType<Prisma.WorkspaceMemberCreateManyWorkspaceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WorkspaceMemberCreateManyWorkspaceInputSchema),z.lazy(() => WorkspaceMemberCreateManyWorkspaceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WorkspaceMemberCreateManyWorkspaceInputEnvelopeSchema;
