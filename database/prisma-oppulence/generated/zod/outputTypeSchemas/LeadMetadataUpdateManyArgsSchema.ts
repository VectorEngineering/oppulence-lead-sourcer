import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadMetadataUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadMetadataUpdateManyMutationInputSchema'
import { LeadMetadataUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadMetadataUncheckedUpdateManyInputSchema'
import { LeadMetadataWhereInputSchema } from '../inputTypeSchemas/LeadMetadataWhereInputSchema'

export const LeadMetadataUpdateManyArgsSchema: z.ZodType<Prisma.LeadMetadataUpdateManyArgs> = z
    .object({
        data: z.union([LeadMetadataUpdateManyMutationInputSchema, LeadMetadataUncheckedUpdateManyInputSchema]),
        where: LeadMetadataWhereInputSchema.optional()
    })
    .strict()

export default LeadMetadataUpdateManyArgsSchema
