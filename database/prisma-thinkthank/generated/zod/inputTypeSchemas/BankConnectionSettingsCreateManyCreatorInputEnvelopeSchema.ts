import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankConnectionSettingsCreateManyCreatorInputSchema } from './BankConnectionSettingsCreateManyCreatorInputSchema';

export const BankConnectionSettingsCreateManyCreatorInputEnvelopeSchema: z.ZodType<Prisma.BankConnectionSettingsCreateManyCreatorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BankConnectionSettingsCreateManyCreatorInputSchema),z.lazy(() => BankConnectionSettingsCreateManyCreatorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BankConnectionSettingsCreateManyCreatorInputEnvelopeSchema;
