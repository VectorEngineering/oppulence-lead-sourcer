import { z } from 'zod';

export const ReportRecipientScalarFieldEnumSchema = z.enum(['id','reportId','email','name','type','isActive']);

export default ReportRecipientScalarFieldEnumSchema;
