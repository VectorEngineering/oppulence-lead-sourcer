import { z } from 'zod'

export const DealProductScalarFieldEnumSchema = z.enum([
    'id',
    'dealId',
    'productId',
    'quantity',
    'unitPrice',
    'discount',
    'total',
    'description',
    'createdAt',
    'updatedAt'
])

export default DealProductScalarFieldEnumSchema
