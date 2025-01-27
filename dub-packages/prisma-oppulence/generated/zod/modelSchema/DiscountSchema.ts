import { z } from 'zod';
import { CommissionTypeSchema } from '../inputTypeSchemas/CommissionTypeSchema'
import { CommissionIntervalSchema } from '../inputTypeSchemas/CommissionIntervalSchema'

/////////////////////////////////////////
// DISCOUNT SCHEMA
/////////////////////////////////////////

export const DiscountSchema = z.object({
  type: CommissionTypeSchema,
  interval: CommissionIntervalSchema.nullish(),
  id: z.string().cuid(),
  amount: z.number().int(),
  duration: z.number().int().nullish(),
  couponId: z.string().nullish(),
  couponTestId: z.string().nullish(),
  workspaceId: z.string(),
  programId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Discount = z.infer<typeof DiscountSchema>

/////////////////////////////////////////
// DISCOUNT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DiscountOptionalDefaultsSchema = DiscountSchema.merge(z.object({
  type: CommissionTypeSchema.optional(),
  id: z.string().cuid().optional(),
  amount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type DiscountOptionalDefaults = z.infer<typeof DiscountOptionalDefaultsSchema>

export default DiscountSchema;
