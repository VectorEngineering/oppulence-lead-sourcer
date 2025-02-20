import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxActivityIncludeSchema } from '../inputTypeSchemas/InboxActivityIncludeSchema'
import { InboxActivityWhereInputSchema } from '../inputTypeSchemas/InboxActivityWhereInputSchema'
import { InboxActivityOrderByWithRelationInputSchema } from '../inputTypeSchemas/InboxActivityOrderByWithRelationInputSchema'
import { InboxActivityWhereUniqueInputSchema } from '../inputTypeSchemas/InboxActivityWhereUniqueInputSchema'
import { InboxActivityScalarFieldEnumSchema } from '../inputTypeSchemas/InboxActivityScalarFieldEnumSchema'
import { InboxArgsSchema } from '../outputTypeSchemas/InboxArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InboxActivitySelectSchema: z.ZodType<Prisma.InboxActivitySelect> = z
    .object({
        id: z.boolean().optional(),
        inboxId: z.boolean().optional(),
        action: z.boolean().optional(),
        description: z.boolean().optional(),
        metadata: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        ipAddress: z.boolean().optional(),
        userAgent: z.boolean().optional(),
        sessionId: z.boolean().optional(),
        requestId: z.boolean().optional(),
        success: z.boolean().optional(),
        errorDetails: z.boolean().optional(),
        severity: z.boolean().optional(),
        source: z.boolean().optional(),
        location: z.boolean().optional(),
        deviceInfo: z.boolean().optional(),
        riskScore: z.boolean().optional(),
        inbox: z.union([z.boolean(), z.lazy(() => InboxArgsSchema)]).optional()
    })
    .strict()

export const InboxActivityFindFirstArgsSchema: z.ZodType<Prisma.InboxActivityFindFirstArgs> = z
    .object({
        select: InboxActivitySelectSchema.optional(),
        include: InboxActivityIncludeSchema.optional(),
        where: InboxActivityWhereInputSchema.optional(),
        orderBy: z.union([InboxActivityOrderByWithRelationInputSchema.array(), InboxActivityOrderByWithRelationInputSchema]).optional(),
        cursor: InboxActivityWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([InboxActivityScalarFieldEnumSchema, InboxActivityScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default InboxActivityFindFirstArgsSchema
