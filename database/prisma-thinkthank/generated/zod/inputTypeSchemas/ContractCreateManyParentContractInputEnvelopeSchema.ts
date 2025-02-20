import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateManyParentContractInputSchema } from './ContractCreateManyParentContractInputSchema'

export const ContractCreateManyParentContractInputEnvelopeSchema: z.ZodType<Prisma.ContractCreateManyParentContractInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ContractCreateManyParentContractInputSchema),
            z.lazy(() => ContractCreateManyParentContractInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ContractCreateManyParentContractInputEnvelopeSchema
