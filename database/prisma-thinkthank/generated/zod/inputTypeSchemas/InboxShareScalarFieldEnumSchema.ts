import { z } from 'zod';

export const InboxShareScalarFieldEnumSchema = z.enum(['id','inboxId','userId','email','accessLevel','expiresAt','password','createdAt','updatedAt','lastAccessed','accessCount','maxAccesses','ipRestriction','domainRestriction','deviceLimit','requireMFA','notifyOnAccess','accessSchedule','revokedAt','revokedBy','revokeReason']);

export default InboxShareScalarFieldEnumSchema;
