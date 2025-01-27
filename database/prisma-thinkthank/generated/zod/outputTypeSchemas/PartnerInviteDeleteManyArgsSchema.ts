import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerInviteWhereInputSchema } from '../inputTypeSchemas/PartnerInviteWhereInputSchema'

export const PartnerInviteDeleteManyArgsSchema: z.ZodType<Prisma.PartnerInviteDeleteManyArgs> = z
    .object({
        where: PartnerInviteWhereInputSchema.optional()
    })
    .strict()

export default PartnerInviteDeleteManyArgsSchema
