import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { WorkspaceUpdateOneRequiredWithoutMembersNestedInputSchema } from './WorkspaceUpdateOneRequiredWithoutMembersNestedInputSchema'

export const WorkspaceMemberUpdateWithoutUserInputSchema: z.ZodType<Prisma.WorkspaceMemberUpdateWithoutUserInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        workspace: z.lazy(() => WorkspaceUpdateOneRequiredWithoutMembersNestedInputSchema).optional()
    })
    .strict()

export default WorkspaceMemberUpdateWithoutUserInputSchema
