import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleStatusSchema } from './SaleStatusSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { CommissionTypeSchema } from './CommissionTypeSchema';
import { CommissionIntervalSchema } from './CommissionIntervalSchema';
import { ProgramCreateNestedOneWithoutSalesInputSchema } from './ProgramCreateNestedOneWithoutSalesInputSchema';
import { PayoutCreateNestedOneWithoutSalesInputSchema } from './PayoutCreateNestedOneWithoutSalesInputSchema';
import { CustomerCreateNestedOneWithoutSalesInputSchema } from './CustomerCreateNestedOneWithoutSalesInputSchema';

export const SaleCreateWithoutPartnerInputSchema: z.ZodType<Prisma.SaleCreateWithoutPartnerInput> = z.object({
  id: z.string().cuid().optional(),
  linkId: z.string(),
  clickId: z.string(),
  invoiceId: z.string().optional().nullable(),
  eventId: z.string(),
  amount: z.number().int(),
  currency: z.string(),
  paymentProcessor: z.string(),
  earnings: z.number().int().optional(),
  status: z.lazy(() => SaleStatusSchema).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  commissionAmount: z.number().int(),
  commissionType: z.lazy(() => CommissionTypeSchema),
  recurringCommission: z.boolean(),
  recurringInterval: z.lazy(() => CommissionIntervalSchema).optional().nullable(),
  recurringDuration: z.number().int().optional().nullable(),
  isLifetimeRecurring: z.boolean().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  program: z.lazy(() => ProgramCreateNestedOneWithoutSalesInputSchema),
  payout: z.lazy(() => PayoutCreateNestedOneWithoutSalesInputSchema).optional(),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutSalesInputSchema)
}).strict();

export default SaleCreateWithoutPartnerInputSchema;
