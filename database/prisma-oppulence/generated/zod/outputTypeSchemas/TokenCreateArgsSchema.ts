import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TokenIncludeSchema } from '../inputTypeSchemas/TokenIncludeSchema'
import { TokenCreateInputSchema } from '../inputTypeSchemas/TokenCreateInputSchema'
import { TokenUncheckedCreateInputSchema } from '../inputTypeSchemas/TokenUncheckedCreateInputSchema'
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

export const TokenCreateArgsSchema: z.ZodType<Prisma.TokenCreateArgs> = z
    .object({
        select: TokenSelectSchema.optional(),
        include: TokenIncludeSchema.optional(),
        data: z.union([TokenCreateInputSchema, TokenUncheckedCreateInputSchema])
    })
    .strict()

export default TokenCreateArgsSchema
