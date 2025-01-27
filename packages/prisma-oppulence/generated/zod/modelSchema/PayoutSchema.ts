import { z } from 'zod';
import { PayoutStatusSchema } from '../inputTypeSchemas/PayoutStatusSchema'
import { PayoutTypeSchema } from '../inputTypeSchemas/PayoutTypeSchema'

/////////////////////////////////////////
// PAYOUT SCHEMA
/////////////////////////////////////////

export const PayoutSchema = z.object({
  status: PayoutStatusSchema,
  type: PayoutTypeSchema,
  id: z.string().cuid(),
  programId: z.string(),
  partnerId: z.string(),
  invoiceId: z.string().nullish(),
  amount: z.number().int(),
  currency: z.string(),
  description: z.string().nullish(),
  periodStart: z.coerce.date().nullish(),
  periodEnd: z.coerce.date().nullish(),
  quantity: z.number().int().nullish(),
  stripeTransferId: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  paidAt: z.coerce.date().nullish(),
})

export type Payout = z.infer<typeof PayoutSchema>

/////////////////////////////////////////
// PAYOUT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PayoutOptionalDefaultsSchema = PayoutSchema.merge(z.object({
  status: PayoutStatusSchema.optional(),
  type: PayoutTypeSchema.optional(),
  id: z.string().cuid().optional(),
  amount: z.number().int().optional(),
  currency: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type PayoutOptionalDefaults = z.infer<typeof PayoutOptionalDefaultsSchema>

export default PayoutSchema;
