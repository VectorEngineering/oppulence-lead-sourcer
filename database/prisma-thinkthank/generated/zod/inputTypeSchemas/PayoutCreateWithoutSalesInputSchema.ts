import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutStatusSchema } from './PayoutStatusSchema';
import { PayoutTypeSchema } from './PayoutTypeSchema';
import { ProgramCreateNestedOneWithoutPayoutsInputSchema } from './ProgramCreateNestedOneWithoutPayoutsInputSchema';
import { PartnerCreateNestedOneWithoutPayoutsInputSchema } from './PartnerCreateNestedOneWithoutPayoutsInputSchema';
import { InvoiceCreateNestedOneWithoutPayoutsInputSchema } from './InvoiceCreateNestedOneWithoutPayoutsInputSchema';

export const PayoutCreateWithoutSalesInputSchema: z.ZodType<Prisma.PayoutCreateWithoutSalesInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number().int().optional(),
  currency: z.string().optional(),
  status: z.lazy(() => PayoutStatusSchema).optional(),
  type: z.lazy(() => PayoutTypeSchema).optional(),
  description: z.string().optional().nullable(),
  periodStart: z.coerce.date().optional().nullable(),
  periodEnd: z.coerce.date().optional().nullable(),
  quantity: z.number().int().optional().nullable(),
  stripeTransferId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  paidAt: z.coerce.date().optional().nullable(),
  program: z.lazy(() => ProgramCreateNestedOneWithoutPayoutsInputSchema),
  partner: z.lazy(() => PartnerCreateNestedOneWithoutPayoutsInputSchema),
  invoice: z.lazy(() => InvoiceCreateNestedOneWithoutPayoutsInputSchema).optional()
}).strict();

export default PayoutCreateWithoutSalesInputSchema;
