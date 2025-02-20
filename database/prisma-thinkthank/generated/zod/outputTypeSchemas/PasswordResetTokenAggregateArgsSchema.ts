import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PasswordResetTokenWhereInputSchema } from '../inputTypeSchemas/PasswordResetTokenWhereInputSchema'
import { PasswordResetTokenOrderByWithRelationInputSchema } from '../inputTypeSchemas/PasswordResetTokenOrderByWithRelationInputSchema'
import { PasswordResetTokenWhereUniqueInputSchema } from '../inputTypeSchemas/PasswordResetTokenWhereUniqueInputSchema'

export const PasswordResetTokenAggregateArgsSchema: z.ZodType<Prisma.PasswordResetTokenAggregateArgs> = z
    .object({
        where: PasswordResetTokenWhereInputSchema.optional(),
        orderBy: z
            .union([PasswordResetTokenOrderByWithRelationInputSchema.array(), PasswordResetTokenOrderByWithRelationInputSchema])
            .optional(),
        cursor: PasswordResetTokenWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default PasswordResetTokenAggregateArgsSchema
