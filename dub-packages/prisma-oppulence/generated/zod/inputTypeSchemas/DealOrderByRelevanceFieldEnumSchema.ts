import { z } from 'zod';

export const DealOrderByRelevanceFieldEnumSchema = z.enum(['id','name','description','pipelineId','stageId','leadId','currency','dealCategory','dealFocus','synergyDescription','complianceNotes','discountReason','closingStrategy','leadRating','reason','notes','assignedToId','projectId','createdBy','updatedBy']);

export default DealOrderByRelevanceFieldEnumSchema;
