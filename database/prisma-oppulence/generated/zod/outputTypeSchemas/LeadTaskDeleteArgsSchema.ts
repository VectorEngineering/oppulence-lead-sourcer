import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadTaskIncludeSchema } from '../inputTypeSchemas/LeadTaskIncludeSchema'
import { LeadTaskWhereUniqueInputSchema } from '../inputTypeSchemas/LeadTaskWhereUniqueInputSchema'
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

export const LeadTaskDeleteArgsSchema: z.ZodType<Prisma.LeadTaskDeleteArgs> = z
    .object({
        select: LeadTaskSelectSchema.optional(),
        include: LeadTaskIncludeSchema.optional(),
        where: LeadTaskWhereUniqueInputSchema
    })
    .strict()

export default LeadTaskDeleteArgsSchema
