import { z } from 'zod';

export const PipelineAutomationScalarFieldEnumSchema = z.enum(['id','pipelineId','name','description','isActive','triggerType','actionType','priority','createdAt','updatedAt','lastTriggered']);

export default PipelineAutomationScalarFieldEnumSchema;
