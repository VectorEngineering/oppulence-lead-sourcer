import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramInviteCreateManyProgramInputSchema } from './ProgramInviteCreateManyProgramInputSchema';

export const ProgramInviteCreateManyProgramInputEnvelopeSchema: z.ZodType<Prisma.ProgramInviteCreateManyProgramInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProgramInviteCreateManyProgramInputSchema),z.lazy(() => ProgramInviteCreateManyProgramInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProgramInviteCreateManyProgramInputEnvelopeSchema;
