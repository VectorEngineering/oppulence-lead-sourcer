import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerInviteCreateManyInputSchema } from '../inputTypeSchemas/PartnerInviteCreateManyInputSchema'

export const PartnerInviteCreateManyArgsSchema: z.ZodType<Prisma.PartnerInviteCreateManyArgs> = z
    .object({
        data: z.union([PartnerInviteCreateManyInputSchema, PartnerInviteCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PartnerInviteCreateManyArgsSchema
