import { z } from 'zod';

export const ReportAccessScalarFieldEnumSchema = z.enum(['id','reportId','userId','accessType']);

export default ReportAccessScalarFieldEnumSchema;
