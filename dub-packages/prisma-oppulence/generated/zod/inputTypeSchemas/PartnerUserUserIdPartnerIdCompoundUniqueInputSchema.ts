import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PartnerUserUserIdPartnerIdCompoundUniqueInputSchema: z.ZodType<Prisma.PartnerUserUserIdPartnerIdCompoundUniqueInput> = z.object({
  userId: z.string(),
  partnerId: z.string()
}).strict();

export default PartnerUserUserIdPartnerIdCompoundUniqueInputSchema;
