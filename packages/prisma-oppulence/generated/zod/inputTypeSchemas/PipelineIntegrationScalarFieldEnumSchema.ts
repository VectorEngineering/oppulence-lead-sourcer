import { z } from 'zod';

export const PipelineIntegrationScalarFieldEnumSchema = z.enum(['id','pipelineId','type','name','provider','config','isActive','lastSyncedAt']);

export default PipelineIntegrationScalarFieldEnumSchema;
