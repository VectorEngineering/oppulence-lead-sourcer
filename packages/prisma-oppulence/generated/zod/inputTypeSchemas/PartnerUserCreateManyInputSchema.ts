import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerRoleSchema } from './PartnerRoleSchema';

export const PartnerUserCreateManyInputSchema: z.ZodType<Prisma.PartnerUserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => PartnerRoleSchema).optional(),
  userId: z.string(),
  partnerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default PartnerUserCreateManyInputSchema;
