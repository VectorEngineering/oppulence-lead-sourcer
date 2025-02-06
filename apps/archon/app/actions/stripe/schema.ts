import { z } from 'zod'

export const createStripeSessionSchema = z.object({
    priceId: z.string()
})
