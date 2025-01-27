import { z } from 'zod';

export const ReportFormatSchema = z.enum(['pdf','csv','excel','json','html']);

export type ReportFormatType = `${z.infer<typeof ReportFormatSchema>}`

export default ReportFormatSchema;
