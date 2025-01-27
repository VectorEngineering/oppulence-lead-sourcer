import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ComplianceTypeSchema } from './ComplianceTypeSchema'

export const EnumComplianceTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumComplianceTypeFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => ComplianceTypeSchema).optional()
    })
    .strict()

export default EnumComplianceTypeFieldUpdateOperationsInputSchema
