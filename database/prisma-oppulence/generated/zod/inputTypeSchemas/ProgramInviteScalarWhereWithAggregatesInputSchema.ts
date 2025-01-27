import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const ProgramInviteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProgramInviteScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ProgramInviteScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ProgramInviteScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => ProgramInviteScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ProgramInviteScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ProgramInviteScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        programId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        linkId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default ProgramInviteScalarWhereWithAggregatesInputSchema
