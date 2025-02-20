import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxActivityIncludeSchema } from '../inputTypeSchemas/InboxActivityIncludeSchema'
import { InboxActivityWhereUniqueInputSchema } from '../inputTypeSchemas/InboxActivityWhereUniqueInputSchema'
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

export const InboxActivityFindUniqueArgsSchema: z.ZodType<Prisma.InboxActivityFindUniqueArgs> = z
    .object({
        select: InboxActivitySelectSchema.optional(),
        include: InboxActivityIncludeSchema.optional(),
        where: InboxActivityWhereUniqueInputSchema
    })
    .strict()

export default InboxActivityFindUniqueArgsSchema
