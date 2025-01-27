import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { SaleStatusSchema } from '../inputTypeSchemas/SaleStatusSchema'
import { CommissionTypeSchema } from '../inputTypeSchemas/CommissionTypeSchema'
import { CommissionIntervalSchema } from '../inputTypeSchemas/CommissionIntervalSchema'

/////////////////////////////////////////
// SALE SCHEMA
/////////////////////////////////////////

export const SaleSchema = z.object({
  status: SaleStatusSchema,
  commissionType: CommissionTypeSchema,
  recurringInterval: CommissionIntervalSchema.nullish(),
  id: z.string().cuid(),
  programId: z.string(),
  partnerId: z.string(),
  payoutId: z.string().nullish(),
  customerId: z.string(),
  linkId: z.string(),
  clickId: z.string(),
  invoiceId: z.string().nullish(),
  eventId: z.string(),
  amount: z.number().int(),
  currency: z.string(),
  paymentProcessor: z.string(),
  earnings: z.number().int(),
  metadata: JsonValueSchema.nullable(),
  commissionAmount: z.number().int(),
  recurringCommission: z.boolean(),
  recurringDuration: z.number().int().nullish(),
  isLifetimeRecurring: z.boolean().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Sale = z.infer<typeof SaleSchema>

/////////////////////////////////////////
// SALE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SaleOptionalDefaultsSchema = SaleSchema.merge(z.object({
  status: SaleStatusSchema.optional(),
  id: z.string().cuid().optional(),
  earnings: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type SaleOptionalDefaults = z.infer<typeof SaleOptionalDefaultsSchema>

export default SaleSchema;
