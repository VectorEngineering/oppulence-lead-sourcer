import { z } from 'zod';

export const ReportScheduleOrderByRelevanceFieldEnumSchema = z.enum(['id','reportId','frequency']);

export default ReportScheduleOrderByRelevanceFieldEnumSchema;
