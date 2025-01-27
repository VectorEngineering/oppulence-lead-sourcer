import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramResourceTypeSchema } from './ProgramResourceTypeSchema'
import { ProgramCreateNestedOneWithoutResourcesInputSchema } from './ProgramCreateNestedOneWithoutResourcesInputSchema'

export const ProgramResourceCreateInputSchema: z.ZodType<Prisma.ProgramResourceCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        type: z.lazy(() => ProgramResourceTypeSchema),
        name: z.string(),
        url: z.string(),
        size: z.number().int().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        program: z.lazy(() => ProgramCreateNestedOneWithoutResourcesInputSchema)
    })
    .strict()

export default ProgramResourceCreateInputSchema
