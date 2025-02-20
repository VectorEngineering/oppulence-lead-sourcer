import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerUserCreateManyUserInputSchema } from './PartnerUserCreateManyUserInputSchema';

export const PartnerUserCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.PartnerUserCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PartnerUserCreateManyUserInputSchema),z.lazy(() => PartnerUserCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PartnerUserCreateManyUserInputEnvelopeSchema;
