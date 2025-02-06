import { z } from 'zod';

export const ReportSortingScalarFieldEnumSchema = z.enum(['id','reportId','field','direction','position']);

export default ReportSortingScalarFieldEnumSchema;
