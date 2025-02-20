import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxLabelIncludeSchema } from '../inputTypeSchemas/InboxLabelIncludeSchema'
import { InboxLabelWhereInputSchema } from '../inputTypeSchemas/InboxLabelWhereInputSchema'
import { InboxLabelOrderByWithRelationInputSchema } from '../inputTypeSchemas/InboxLabelOrderByWithRelationInputSchema'
import { InboxLabelWhereUniqueInputSchema } from '../inputTypeSchemas/InboxLabelWhereUniqueInputSchema'
import { InboxLabelScalarFieldEnumSchema } from '../inputTypeSchemas/InboxLabelScalarFieldEnumSchema'
import { InboxArgsSchema } from '../outputTypeSchemas/InboxArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InboxLabelSelectSchema: z.ZodType<Prisma.InboxLabelSelect> = z
    .object({
        id: z.boolean().optional(),
        inboxId: z.boolean().optional(),
        name: z.boolean().optional(),
        color: z.boolean().optional(),
        description: z.boolean().optional(),
        metadata: z.boolean().optional(),
        icon: z.boolean().optional(),
        category: z.boolean().optional(),
        priority: z.boolean().optional(),
        isSystem: z.boolean().optional(),
        isRequired: z.boolean().optional(),
        validFrom: z.boolean().optional(),
        validUntil: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        updatedBy: z.boolean().optional(),
        inbox: z.union([z.boolean(), z.lazy(() => InboxArgsSchema)]).optional()
    })
    .strict()

export const InboxLabelFindManyArgsSchema: z.ZodType<Prisma.InboxLabelFindManyArgs> = z
    .object({
        select: InboxLabelSelectSchema.optional(),
        include: InboxLabelIncludeSchema.optional(),
        where: InboxLabelWhereInputSchema.optional(),
        orderBy: z.union([InboxLabelOrderByWithRelationInputSchema.array(), InboxLabelOrderByWithRelationInputSchema]).optional(),
        cursor: InboxLabelWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([InboxLabelScalarFieldEnumSchema, InboxLabelScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default InboxLabelFindManyArgsSchema
