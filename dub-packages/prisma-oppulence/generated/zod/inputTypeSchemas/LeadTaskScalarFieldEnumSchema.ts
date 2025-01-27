import { z } from 'zod';

export const LeadTaskScalarFieldEnumSchema = z.enum(['id','leadId','title','description','status','priority','dueDate','completedAt','assignedToId','createdBy','updatedBy','createdAt','updatedAt']);

export default LeadTaskScalarFieldEnumSchema;
