import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramInviteWhereInputSchema } from '../inputTypeSchemas/ProgramInviteWhereInputSchema'
import { ProgramInviteOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProgramInviteOrderByWithAggregationInputSchema'
import { ProgramInviteScalarFieldEnumSchema } from '../inputTypeSchemas/ProgramInviteScalarFieldEnumSchema'
import { ProgramInviteScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProgramInviteScalarWhereWithAggregatesInputSchema'

export const ProgramInviteGroupByArgsSchema: z.ZodType<Prisma.ProgramInviteGroupByArgs> = z
    .object({
        where: ProgramInviteWhereInputSchema.optional(),
        orderBy: z
            .union([ProgramInviteOrderByWithAggregationInputSchema.array(), ProgramInviteOrderByWithAggregationInputSchema])
            .optional(),
        by: ProgramInviteScalarFieldEnumSchema.array(),
        having: ProgramInviteScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ProgramInviteGroupByArgsSchema
