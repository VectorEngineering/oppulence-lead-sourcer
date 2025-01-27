import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerInviteWhereInputSchema } from '../inputTypeSchemas/PartnerInviteWhereInputSchema'
import { PartnerInviteOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PartnerInviteOrderByWithAggregationInputSchema'
import { PartnerInviteScalarFieldEnumSchema } from '../inputTypeSchemas/PartnerInviteScalarFieldEnumSchema'
import { PartnerInviteScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PartnerInviteScalarWhereWithAggregatesInputSchema'

export const PartnerInviteGroupByArgsSchema: z.ZodType<Prisma.PartnerInviteGroupByArgs> = z
    .object({
        where: PartnerInviteWhereInputSchema.optional(),
        orderBy: z
            .union([PartnerInviteOrderByWithAggregationInputSchema.array(), PartnerInviteOrderByWithAggregationInputSchema])
            .optional(),
        by: PartnerInviteScalarFieldEnumSchema.array(),
        having: PartnerInviteScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default PartnerInviteGroupByArgsSchema
