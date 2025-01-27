import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { ProjectCreateNestedOneWithoutAppsInputSchema } from './ProjectCreateNestedOneWithoutAppsInputSchema'

export const AppCreateWithoutUserInputSchema: z.ZodType<Prisma.AppCreateWithoutUserInput> = z
    .object({
        id: z.string().cuid().optional(),
        appId: z.string(),
        config: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        createdAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable(),
        settings: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        project: z.lazy(() => ProjectCreateNestedOneWithoutAppsInputSchema)
    })
    .strict()

export default AppCreateWithoutUserInputSchema
