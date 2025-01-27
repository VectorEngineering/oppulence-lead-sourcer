import { z } from 'zod';

export const ReportRecipientOrderByRelevanceFieldEnumSchema = z.enum(['id','reportId','email','name','type']);

export default ReportRecipientOrderByRelevanceFieldEnumSchema;
