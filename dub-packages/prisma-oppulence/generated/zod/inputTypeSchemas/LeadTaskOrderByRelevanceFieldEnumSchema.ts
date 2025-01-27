import { z } from 'zod';

export const LeadTaskOrderByRelevanceFieldEnumSchema = z.enum(['id','leadId','title','description','assignedToId','createdBy','updatedBy']);

export default LeadTaskOrderByRelevanceFieldEnumSchema;
