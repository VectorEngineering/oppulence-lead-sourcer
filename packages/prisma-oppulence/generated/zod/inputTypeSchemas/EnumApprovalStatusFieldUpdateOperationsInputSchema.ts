import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ApprovalStatusSchema } from './ApprovalStatusSchema'

export const EnumApprovalStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumApprovalStatusFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => ApprovalStatusSchema).optional()
    })
    .strict()

export default EnumApprovalStatusFieldUpdateOperationsInputSchema
