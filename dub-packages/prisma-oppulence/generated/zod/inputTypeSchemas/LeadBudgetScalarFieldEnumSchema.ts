import { z } from 'zod';

export const LeadBudgetScalarFieldEnumSchema = z.enum(['id','leadId','totalBudget','allocatedBudget','remainingBudget','spentBudget','productCost','serviceCost','implementationCost','maintenanceCost','fiscalYear','quarterlyBreakdown','monthlyBreakdown','status','approvalStatus','approvedBy','approvedAt','createdAt','updatedAt']);

export default LeadBudgetScalarFieldEnumSchema;
