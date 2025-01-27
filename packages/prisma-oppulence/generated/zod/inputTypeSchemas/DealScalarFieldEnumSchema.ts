import { z } from 'zod';

export const DealScalarFieldEnumSchema = z.enum(['id','name','description','pipelineId','stageId','leadId','status','priority','value','currency','probability','expectedRevenue','dealCategory','dealFocus','synergyPotential','synergyDescription','complianceCheck','complianceNotes','estimatedProfitMargin','discountReason','closingStrategy','marketingChannel','leadRating','startDate','closeDate','actualCloseDate','progress','reason','notes','assignedToId','projectId','createdAt','updatedAt','archivedAt','createdBy','updatedBy']);

export default DealScalarFieldEnumSchema;
