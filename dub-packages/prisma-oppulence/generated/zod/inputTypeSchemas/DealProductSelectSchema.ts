import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealArgsSchema } from "../outputTypeSchemas/DealArgsSchema"

export const DealProductSelectSchema: z.ZodType<Prisma.DealProductSelect> = z.object({
  id: z.boolean().optional(),
  dealId: z.boolean().optional(),
  productId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  unitPrice: z.boolean().optional(),
  discount: z.boolean().optional(),
  total: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deal: z.union([z.boolean(),z.lazy(() => DealArgsSchema)]).optional(),
}).strict()

export default DealProductSelectSchema;
