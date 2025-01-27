import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { BudgetStatusSchema } from '../inputTypeSchemas/BudgetStatusSchema'
import { ApprovalStatusSchema } from '../inputTypeSchemas/ApprovalStatusSchema'

/////////////////////////////////////////
// LEAD BUDGET SCHEMA
/////////////////////////////////////////

export const LeadBudgetSchema = z.object({
  status: BudgetStatusSchema,
  approvalStatus: ApprovalStatusSchema,
  id: z.string().cuid(),
  leadId: z.string(),
  totalBudget: z.number(),
  allocatedBudget: z.number(),
  remainingBudget: z.number(),
  spentBudget: z.number(),
  productCost: z.number(),
  serviceCost: z.number(),
  implementationCost: z.number(),
  maintenanceCost: z.number(),
  fiscalYear: z.number().int(),
  quarterlyBreakdown: JsonValueSchema,
  monthlyBreakdown: JsonValueSchema,
  approvedBy: z.string().nullish(),
  approvedAt: z.coerce.date().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type LeadBudget = z.infer<typeof LeadBudgetSchema>

/////////////////////////////////////////
// LEAD BUDGET OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadBudgetOptionalDefaultsSchema = LeadBudgetSchema.merge(z.object({
  status: BudgetStatusSchema.optional(),
  approvalStatus: ApprovalStatusSchema.optional(),
  id: z.string().cuid().optional(),
  spentBudget: z.number().optional(),
  productCost: z.number().optional(),
  serviceCost: z.number().optional(),
  implementationCost: z.number().optional(),
  maintenanceCost: z.number().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type LeadBudgetOptionalDefaults = z.infer<typeof LeadBudgetOptionalDefaultsSchema>

export default LeadBudgetSchema;
