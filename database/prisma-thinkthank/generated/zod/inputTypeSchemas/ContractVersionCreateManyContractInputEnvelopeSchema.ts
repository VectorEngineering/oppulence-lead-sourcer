import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractVersionCreateManyContractInputSchema } from './ContractVersionCreateManyContractInputSchema'

export const ContractVersionCreateManyContractInputEnvelopeSchema: z.ZodType<Prisma.ContractVersionCreateManyContractInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ContractVersionCreateManyContractInputSchema),
            z.lazy(() => ContractVersionCreateManyContractInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ContractVersionCreateManyContractInputEnvelopeSchema
