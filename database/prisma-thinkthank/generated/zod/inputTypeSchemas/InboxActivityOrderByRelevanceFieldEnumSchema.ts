import { z } from 'zod';

export const InboxActivityOrderByRelevanceFieldEnumSchema = z.enum(['id','inboxId','action','description','createdBy','ipAddress','userAgent','sessionId','requestId','severity','source','location']);

export default InboxActivityOrderByRelevanceFieldEnumSchema;
