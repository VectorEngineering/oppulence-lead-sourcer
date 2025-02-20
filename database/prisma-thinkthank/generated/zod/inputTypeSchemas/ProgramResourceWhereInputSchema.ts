import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { EnumProgramResourceTypeFilterSchema } from './EnumProgramResourceTypeFilterSchema'
import { ProgramResourceTypeSchema } from './ProgramResourceTypeSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { ProgramRelationFilterSchema } from './ProgramRelationFilterSchema'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'

export const ProgramResourceWhereInputSchema: z.ZodType<Prisma.ProgramResourceWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => ProgramResourceWhereInputSchema), z.lazy(() => ProgramResourceWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => ProgramResourceWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => ProgramResourceWhereInputSchema), z.lazy(() => ProgramResourceWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        programId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => EnumProgramResourceTypeFilterSchema), z.lazy(() => ProgramResourceTypeSchema)]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        size: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        program: z.union([z.lazy(() => ProgramRelationFilterSchema), z.lazy(() => ProgramWhereInputSchema)]).optional()
    })
    .strict()

export default ProgramResourceWhereInputSchema
