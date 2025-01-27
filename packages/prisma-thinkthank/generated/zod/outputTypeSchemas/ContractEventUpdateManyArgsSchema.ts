import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractEventUpdateManyMutationInputSchema } from '../inputTypeSchemas/ContractEventUpdateManyMutationInputSchema'
import { ContractEventUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ContractEventUncheckedUpdateManyInputSchema'
import { ContractEventWhereInputSchema } from '../inputTypeSchemas/ContractEventWhereInputSchema'

export const ContractEventUpdateManyArgsSchema: z.ZodType<Prisma.ContractEventUpdateManyArgs> = z
    .object({
        data: z.union([ContractEventUpdateManyMutationInputSchema, ContractEventUncheckedUpdateManyInputSchema]),
        where: ContractEventWhereInputSchema.optional()
    })
    .strict()

export default ContractEventUpdateManyArgsSchema
