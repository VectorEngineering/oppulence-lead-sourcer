import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ComplianceStatusSchema } from './ComplianceStatusSchema'
import { NestedEnumComplianceStatusNullableFilterSchema } from './NestedEnumComplianceStatusNullableFilterSchema'

export const EnumComplianceStatusNullableFilterSchema: z.ZodType<Prisma.EnumComplianceStatusNullableFilter> = z
    .object({
        equals: z
            .lazy(() => ComplianceStatusSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => ComplianceStatusSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => ComplianceStatusSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => ComplianceStatusSchema), z.lazy(() => NestedEnumComplianceStatusNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default EnumComplianceStatusNullableFilterSchema
