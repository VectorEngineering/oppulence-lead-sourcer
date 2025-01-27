import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateManyWorkspaceInputSchema } from './ProgramCreateManyWorkspaceInputSchema';

export const ProgramCreateManyWorkspaceInputEnvelopeSchema: z.ZodType<Prisma.ProgramCreateManyWorkspaceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProgramCreateManyWorkspaceInputSchema),z.lazy(() => ProgramCreateManyWorkspaceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProgramCreateManyWorkspaceInputEnvelopeSchema;
