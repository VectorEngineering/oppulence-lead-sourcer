import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationCreateManyPartnerInputSchema } from './ProgramApplicationCreateManyPartnerInputSchema';

export const ProgramApplicationCreateManyPartnerInputEnvelopeSchema: z.ZodType<Prisma.ProgramApplicationCreateManyPartnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProgramApplicationCreateManyPartnerInputSchema),z.lazy(() => ProgramApplicationCreateManyPartnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProgramApplicationCreateManyPartnerInputEnvelopeSchema;
