import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateManyProgramInputSchema } from './LinkCreateManyProgramInputSchema';

export const LinkCreateManyProgramInputEnvelopeSchema: z.ZodType<Prisma.LinkCreateManyProgramInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LinkCreateManyProgramInputSchema),z.lazy(() => LinkCreateManyProgramInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LinkCreateManyProgramInputEnvelopeSchema;
