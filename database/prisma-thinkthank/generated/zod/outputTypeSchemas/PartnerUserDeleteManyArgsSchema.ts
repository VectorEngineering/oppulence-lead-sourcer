import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerUserWhereInputSchema } from '../inputTypeSchemas/PartnerUserWhereInputSchema'

export const PartnerUserDeleteManyArgsSchema: z.ZodType<Prisma.PartnerUserDeleteManyArgs> = z
    .object({
        where: PartnerUserWhereInputSchema.optional()
    })
    .strict()

export default PartnerUserDeleteManyArgsSchema
