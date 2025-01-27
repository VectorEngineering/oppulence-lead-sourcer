import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DiscountCountOutputTypeSelectSchema: z.ZodType<Prisma.DiscountCountOutputTypeSelect> = z.object({
  programEnrollments: z.boolean().optional(),
}).strict();

export default DiscountCountOutputTypeSelectSchema;
