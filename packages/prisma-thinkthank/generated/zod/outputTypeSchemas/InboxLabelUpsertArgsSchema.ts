import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxLabelIncludeSchema } from '../inputTypeSchemas/InboxLabelIncludeSchema'
import { InboxLabelWhereUniqueInputSchema } from '../inputTypeSchemas/InboxLabelWhereUniqueInputSchema'
import { InboxLabelCreateInputSchema } from '../inputTypeSchemas/InboxLabelCreateInputSchema'
import { InboxLabelUncheckedCreateInputSchema } from '../inputTypeSchemas/InboxLabelUncheckedCreateInputSchema'
import { InboxLabelUpdateInputSchema } from '../inputTypeSchemas/InboxLabelUpdateInputSchema'
import { InboxLabelUncheckedUpdateInputSchema } from '../inputTypeSchemas/InboxLabelUncheckedUpdateInputSchema'
import { InboxArgsSchema } from './InboxArgsSchema'
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

export const InboxLabelUpsertArgsSchema: z.ZodType<Prisma.InboxLabelUpsertArgs> = z
    .object({
        select: InboxLabelSelectSchema.optional(),
        include: InboxLabelIncludeSchema.optional(),
        where: InboxLabelWhereUniqueInputSchema,
        create: z.union([InboxLabelCreateInputSchema, InboxLabelUncheckedCreateInputSchema]),
        update: z.union([InboxLabelUpdateInputSchema, InboxLabelUncheckedUpdateInputSchema])
    })
    .strict()

export default InboxLabelUpsertArgsSchema
