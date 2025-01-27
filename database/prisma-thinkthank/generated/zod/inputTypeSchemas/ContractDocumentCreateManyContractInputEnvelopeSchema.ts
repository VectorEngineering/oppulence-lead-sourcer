import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractDocumentCreateManyContractInputSchema } from './ContractDocumentCreateManyContractInputSchema'

export const ContractDocumentCreateManyContractInputEnvelopeSchema: z.ZodType<Prisma.ContractDocumentCreateManyContractInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ContractDocumentCreateManyContractInputSchema),
            z.lazy(() => ContractDocumentCreateManyContractInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ContractDocumentCreateManyContractInputEnvelopeSchema
