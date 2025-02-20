import { z } from 'zod';

export const ProgramScalarFieldEnumSchema = z.enum(['id','workspaceId','name','slug','logo','wordmark','brandColor','domain','url','type','cookieLength','commissionAmount','commissionType','commissionDuration','commissionInterval','landerData','createdAt','updatedAt']);

export default ProgramScalarFieldEnumSchema;
