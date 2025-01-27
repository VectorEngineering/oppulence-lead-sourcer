import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TokenIncludeSchema } from '../inputTypeSchemas/TokenIncludeSchema'
import { TokenWhereUniqueInputSchema } from '../inputTypeSchemas/TokenWhereUniqueInputSchema'
import { UserArgsSchema } from './UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TokenSelectSchema: z.ZodType<Prisma.TokenSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        hashedKey: z.boolean().optional(),
        partialKey: z.boolean().optional(),
        expires: z.boolean().optional(),
        lastUsed: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        userId: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
    })
    .strict()

export const TokenDeleteArgsSchema: z.ZodType<Prisma.TokenDeleteArgs> = z
    .object({
        select: TokenSelectSchema.optional(),
        include: TokenIncludeSchema.optional(),
        where: TokenWhereUniqueInputSchema
    })
    .strict()

export default TokenDeleteArgsSchema
