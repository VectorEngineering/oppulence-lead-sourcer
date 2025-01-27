import { z } from 'zod';

/////////////////////////////////////////
// DEAL PRODUCT SCHEMA
/////////////////////////////////////////

export const DealProductSchema = z.object({
  id: z.string().cuid(),
  dealId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  discount: z.number().nullish(),
  total: z.number(),
  description: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type DealProduct = z.infer<typeof DealProductSchema>

/////////////////////////////////////////
// DEAL PRODUCT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DealProductOptionalDefaultsSchema = DealProductSchema.merge(z.object({
  id: z.string().cuid().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type DealProductOptionalDefaults = z.infer<typeof DealProductOptionalDefaultsSchema>

export default DealProductSchema;
