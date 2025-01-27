import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DealProductUncheckedCreateInputSchema: z.ZodType<Prisma.DealProductUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  dealId: z.string(),
  productId: z.string(),
  quantity: z.number().int().optional(),
  unitPrice: z.number(),
  discount: z.number().optional().nullable(),
  total: z.number(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default DealProductUncheckedCreateInputSchema;
