import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadTaskIncludeSchema } from '../inputTypeSchemas/LeadTaskIncludeSchema'
import { LeadTaskWhereUniqueInputSchema } from '../inputTypeSchemas/LeadTaskWhereUniqueInputSchema'
import { LeadTaskCreateInputSchema } from '../inputTypeSchemas/LeadTaskCreateInputSchema'
import { LeadTaskUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadTaskUncheckedCreateInputSchema'
import { LeadTaskUpdateInputSchema } from '../inputTypeSchemas/LeadTaskUpdateInputSchema'
import { LeadTaskUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadTaskUncheckedUpdateInputSchema'
import { UserArgsSchema } from './UserArgsSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadTaskSelectSchema: z.ZodType<Prisma.LeadTaskSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        title: z.boolean().optional(),
        description: z.boolean().optional(),
        status: z.boolean().optional(),
        priority: z.boolean().optional(),
        dueDate: z.boolean().optional(),
        completedAt: z.boolean().optional(),
        assignedToId: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        updatedBy: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        assignedTo: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadTaskUpsertArgsSchema: z.ZodType<Prisma.LeadTaskUpsertArgs> = z
    .object({
        select: LeadTaskSelectSchema.optional(),
        include: LeadTaskIncludeSchema.optional(),
        where: LeadTaskWhereUniqueInputSchema,
        create: z.union([LeadTaskCreateInputSchema, LeadTaskUncheckedCreateInputSchema]),
        update: z.union([LeadTaskUpdateInputSchema, LeadTaskUncheckedUpdateInputSchema])
    })
    .strict()

export default LeadTaskUpsertArgsSchema
