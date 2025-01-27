import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxShareIncludeSchema } from '../inputTypeSchemas/InboxShareIncludeSchema'
import { InboxShareWhereInputSchema } from '../inputTypeSchemas/InboxShareWhereInputSchema'
import { InboxShareOrderByWithRelationInputSchema } from '../inputTypeSchemas/InboxShareOrderByWithRelationInputSchema'
import { InboxShareWhereUniqueInputSchema } from '../inputTypeSchemas/InboxShareWhereUniqueInputSchema'
import { InboxShareScalarFieldEnumSchema } from '../inputTypeSchemas/InboxShareScalarFieldEnumSchema'
import { InboxArgsSchema } from './InboxArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InboxShareSelectSchema: z.ZodType<Prisma.InboxShareSelect> = z
    .object({
        id: z.boolean().optional(),
        inboxId: z.boolean().optional(),
        userId: z.boolean().optional(),
        email: z.boolean().optional(),
        accessLevel: z.boolean().optional(),
        expiresAt: z.boolean().optional(),
        password: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lastAccessed: z.boolean().optional(),
        accessCount: z.boolean().optional(),
        maxAccesses: z.boolean().optional(),
        ipRestriction: z.boolean().optional(),
        domainRestriction: z.boolean().optional(),
        deviceLimit: z.boolean().optional(),
        requireMFA: z.boolean().optional(),
        notifyOnAccess: z.boolean().optional(),
        accessSchedule: z.boolean().optional(),
        revokedAt: z.boolean().optional(),
        revokedBy: z.boolean().optional(),
        revokeReason: z.boolean().optional(),
        inbox: z.union([z.boolean(), z.lazy(() => InboxArgsSchema)]).optional()
    })
    .strict()

export const InboxShareFindManyArgsSchema: z.ZodType<Prisma.InboxShareFindManyArgs> = z
    .object({
        select: InboxShareSelectSchema.optional(),
        include: InboxShareIncludeSchema.optional(),
        where: InboxShareWhereInputSchema.optional(),
        orderBy: z.union([InboxShareOrderByWithRelationInputSchema.array(), InboxShareOrderByWithRelationInputSchema]).optional(),
        cursor: InboxShareWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([InboxShareScalarFieldEnumSchema, InboxShareScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default InboxShareFindManyArgsSchema
