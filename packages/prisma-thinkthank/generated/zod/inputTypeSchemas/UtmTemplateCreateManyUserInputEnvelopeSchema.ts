import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UtmTemplateCreateManyUserInputSchema } from './UtmTemplateCreateManyUserInputSchema';

export const UtmTemplateCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UtmTemplateCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UtmTemplateCreateManyUserInputSchema),z.lazy(() => UtmTemplateCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default UtmTemplateCreateManyUserInputEnvelopeSchema;
