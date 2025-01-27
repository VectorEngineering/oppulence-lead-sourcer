import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractEventCreateManyContractInputSchema } from './ContractEventCreateManyContractInputSchema'

export const ContractEventCreateManyContractInputEnvelopeSchema: z.ZodType<Prisma.ContractEventCreateManyContractInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ContractEventCreateManyContractInputSchema),
            z.lazy(() => ContractEventCreateManyContractInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ContractEventCreateManyContractInputEnvelopeSchema
