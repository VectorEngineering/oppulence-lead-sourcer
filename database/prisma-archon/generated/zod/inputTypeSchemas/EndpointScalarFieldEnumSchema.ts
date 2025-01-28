import { z } from 'zod';

export const EndpointScalarFieldEnumSchema = z.enum(['id','userId','name','schema','enabled','webhookEnabled','emailNotify','webhook','formEnabled','successUrl','failUrl','token','createdAt','updatedAt']);

export default EndpointScalarFieldEnumSchema;
