import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { SaleCreateManyInputSchema } from '../inputTypeSchemas/SaleCreateManyInputSchema'

export const SaleCreateManyArgsSchema: z.ZodType<Prisma.SaleCreateManyArgs> = z
    .object({
        data: z.union([SaleCreateManyInputSchema, SaleCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default SaleCreateManyArgsSchema
