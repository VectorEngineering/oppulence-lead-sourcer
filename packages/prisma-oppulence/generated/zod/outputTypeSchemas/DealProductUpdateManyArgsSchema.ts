import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealProductUpdateManyMutationInputSchema } from '../inputTypeSchemas/DealProductUpdateManyMutationInputSchema'
import { DealProductUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DealProductUncheckedUpdateManyInputSchema'
import { DealProductWhereInputSchema } from '../inputTypeSchemas/DealProductWhereInputSchema'

export const DealProductUpdateManyArgsSchema: z.ZodType<Prisma.DealProductUpdateManyArgs> = z
    .object({
        data: z.union([DealProductUpdateManyMutationInputSchema, DealProductUncheckedUpdateManyInputSchema]),
        where: DealProductWhereInputSchema.optional()
    })
    .strict()

export default DealProductUpdateManyArgsSchema
