import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'

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

export default LeadTaskSelectSchema
