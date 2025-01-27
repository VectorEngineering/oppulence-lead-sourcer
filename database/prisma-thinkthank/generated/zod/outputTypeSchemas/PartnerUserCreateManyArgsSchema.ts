import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerUserCreateManyInputSchema } from '../inputTypeSchemas/PartnerUserCreateManyInputSchema'

export const PartnerUserCreateManyArgsSchema: z.ZodType<Prisma.PartnerUserCreateManyArgs> = z
    .object({
        data: z.union([PartnerUserCreateManyInputSchema, PartnerUserCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PartnerUserCreateManyArgsSchema
