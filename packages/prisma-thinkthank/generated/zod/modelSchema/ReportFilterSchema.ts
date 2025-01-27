import { z } from 'zod';
import { FilterOperatorSchema } from '../inputTypeSchemas/FilterOperatorSchema'

/////////////////////////////////////////
// REPORT FILTER SCHEMA
/////////////////////////////////////////

export const ReportFilterSchema = z.object({
  operator: FilterOperatorSchema,
  id: z.string().cuid(),
  reportId: z.string(),
  field: z.string(),
  value: z.string(),
  valueType: z.string(),
  group: z.string().nullish(),
  position: z.number().int(),
})

export type ReportFilter = z.infer<typeof ReportFilterSchema>

/////////////////////////////////////////
// REPORT FILTER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ReportFilterOptionalDefaultsSchema = ReportFilterSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type ReportFilterOptionalDefaults = z.infer<typeof ReportFilterOptionalDefaultsSchema>

export default ReportFilterSchema;
