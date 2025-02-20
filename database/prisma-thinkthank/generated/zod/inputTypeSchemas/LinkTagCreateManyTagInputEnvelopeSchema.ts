import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkTagCreateManyTagInputSchema } from './LinkTagCreateManyTagInputSchema';

export const LinkTagCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.LinkTagCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LinkTagCreateManyTagInputSchema),z.lazy(() => LinkTagCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LinkTagCreateManyTagInputEnvelopeSchema;
