import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MarketingChannelSchema } from './MarketingChannelSchema';

export const NullableEnumMarketingChannelFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumMarketingChannelFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => MarketingChannelSchema).optional().nullable()
}).strict();

export default NullableEnumMarketingChannelFieldUpdateOperationsInputSchema;
