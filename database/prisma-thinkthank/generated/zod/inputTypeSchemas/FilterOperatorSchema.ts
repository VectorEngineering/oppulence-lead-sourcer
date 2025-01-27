import { z } from 'zod'

export const FilterOperatorSchema = z.enum([
    'equals',
    'notEquals',
    'contains',
    'notContains',
    'greaterThan',
    'lessThan',
    'greaterThanOrEqual',
    'lessThanOrEqual',
    'between',
    'in',
    'notIn',
    'isNull',
    'isNotNull'
])

export type FilterOperatorType = `${z.infer<typeof FilterOperatorSchema>}`

export default FilterOperatorSchema
