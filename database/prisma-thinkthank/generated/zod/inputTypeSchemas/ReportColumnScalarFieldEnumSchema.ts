import { z } from 'zod';

export const ReportColumnScalarFieldEnumSchema = z.enum(['id','reportId','field','label','width','position','isVisible','format']);

export default ReportColumnScalarFieldEnumSchema;
