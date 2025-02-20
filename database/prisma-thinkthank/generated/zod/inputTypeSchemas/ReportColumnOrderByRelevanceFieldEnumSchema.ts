import { z } from 'zod';

export const ReportColumnOrderByRelevanceFieldEnumSchema = z.enum(['id','reportId','field','label','format']);

export default ReportColumnOrderByRelevanceFieldEnumSchema;
