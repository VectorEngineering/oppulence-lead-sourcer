import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const WorkspaceInvitationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WorkspaceInvitationScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(() => WorkspaceInvitationScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => WorkspaceInvitationScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            OR: z
                .lazy(() => WorkspaceInvitationScalarWhereWithAggregatesInputSchema)
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(() => WorkspaceInvitationScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => WorkspaceInvitationScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            workspaceId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            token: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            expiresAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
            createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
            updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
        })
        .strict()

export default WorkspaceInvitationScalarWhereWithAggregatesInputSchema
