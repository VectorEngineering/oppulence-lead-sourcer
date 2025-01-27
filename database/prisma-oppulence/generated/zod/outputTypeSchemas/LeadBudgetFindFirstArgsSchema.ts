import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetIncludeSchema } from '../inputTypeSchemas/LeadBudgetIncludeSchema'
import { LeadBudgetWhereInputSchema } from '../inputTypeSchemas/LeadBudgetWhereInputSchema'
import { LeadBudgetOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadBudgetOrderByWithRelationInputSchema'
import { LeadBudgetWhereUniqueInputSchema } from '../inputTypeSchemas/LeadBudgetWhereUniqueInputSchema'
import { LeadBudgetScalarFieldEnumSchema } from '../inputTypeSchemas/LeadBudgetScalarFieldEnumSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
import { LeadBudgetRevisionFindManyArgsSchema } from './LeadBudgetRevisionFindManyArgsSchema'
import { LeadBudgetExpenseFindManyArgsSchema } from './LeadBudgetExpenseFindManyArgsSchema'
import { LeadBudgetCountOutputTypeArgsSchema } from './LeadBudgetCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadBudgetSelectSchema: z.ZodType<Prisma.LeadBudgetSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        totalBudget: z.boolean().optional(),
        allocatedBudget: z.boolean().optional(),
        remainingBudget: z.boolean().optional(),
        spentBudget: z.boolean().optional(),
        productCost: z.boolean().optional(),
        serviceCost: z.boolean().optional(),
        implementationCost: z.boolean().optional(),
        maintenanceCost: z.boolean().optional(),
        fiscalYear: z.boolean().optional(),
        quarterlyBreakdown: z.boolean().optional(),
        monthlyBreakdown: z.boolean().optional(),
        status: z.boolean().optional(),
        approvalStatus: z.boolean().optional(),
        approvedBy: z.boolean().optional(),
        approvedAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional(),
        revisions: z.union([z.boolean(), z.lazy(() => LeadBudgetRevisionFindManyArgsSchema)]).optional(),
        expenses: z.union([z.boolean(), z.lazy(() => LeadBudgetExpenseFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadBudgetCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const LeadBudgetFindFirstArgsSchema: z.ZodType<Prisma.LeadBudgetFindFirstArgs> = z
    .object({
        select: LeadBudgetSelectSchema.optional(),
        include: LeadBudgetIncludeSchema.optional(),
        where: LeadBudgetWhereInputSchema.optional(),
        orderBy: z.union([LeadBudgetOrderByWithRelationInputSchema.array(), LeadBudgetOrderByWithRelationInputSchema]).optional(),
        cursor: LeadBudgetWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LeadBudgetScalarFieldEnumSchema, LeadBudgetScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LeadBudgetFindFirstArgsSchema
