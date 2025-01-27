import { z } from 'zod';

export const ReportFilterOrderByRelevanceFieldEnumSchema = z.enum(['id','reportId','field','value','valueType','group']);

export default ReportFilterOrderByRelevanceFieldEnumSchema;
