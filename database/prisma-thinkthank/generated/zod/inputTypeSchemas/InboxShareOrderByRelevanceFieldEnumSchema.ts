import { z } from 'zod';

export const InboxShareOrderByRelevanceFieldEnumSchema = z.enum(['id','inboxId','userId','email','accessLevel','password','ipRestriction','domainRestriction','revokedBy','revokeReason']);

export default InboxShareOrderByRelevanceFieldEnumSchema;
