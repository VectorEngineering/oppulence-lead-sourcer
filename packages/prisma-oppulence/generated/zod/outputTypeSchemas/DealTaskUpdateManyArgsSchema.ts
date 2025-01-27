import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealTaskUpdateManyMutationInputSchema } from '../inputTypeSchemas/DealTaskUpdateManyMutationInputSchema'
import { DealTaskUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DealTaskUncheckedUpdateManyInputSchema'
import { DealTaskWhereInputSchema } from '../inputTypeSchemas/DealTaskWhereInputSchema'

export const DealTaskUpdateManyArgsSchema: z.ZodType<Prisma.DealTaskUpdateManyArgs> = z
    .object({
        data: z.union([DealTaskUpdateManyMutationInputSchema, DealTaskUncheckedUpdateManyInputSchema]),
        where: DealTaskWhereInputSchema.optional()
    })
    .strict()

export default DealTaskUpdateManyArgsSchema
