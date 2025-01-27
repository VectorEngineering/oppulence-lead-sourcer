import { z } from 'zod';
import { SortDirectionSchema } from '../inputTypeSchemas/SortDirectionSchema'

/////////////////////////////////////////
// REPORT SORTING SCHEMA
/////////////////////////////////////////

export const ReportSortingSchema = z.object({
  direction: SortDirectionSchema,
  id: z.string().cuid(),
  reportId: z.string(),
  field: z.string(),
  position: z.number().int(),
})

export type ReportSorting = z.infer<typeof ReportSortingSchema>

/////////////////////////////////////////
// REPORT SORTING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ReportSortingOptionalDefaultsSchema = ReportSortingSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type ReportSortingOptionalDefaults = z.infer<typeof ReportSortingOptionalDefaultsSchema>

export default ReportSortingSchema;
