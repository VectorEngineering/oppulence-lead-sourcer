import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'
import { DocumentUpdateWithoutProjectInputSchema } from './DocumentUpdateWithoutProjectInputSchema'
import { DocumentUncheckedUpdateWithoutProjectInputSchema } from './DocumentUncheckedUpdateWithoutProjectInputSchema'

export const DocumentUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.DocumentUpdateWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => DocumentWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => DocumentUpdateWithoutProjectInputSchema),
            z.lazy(() => DocumentUncheckedUpdateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default DocumentUpdateWithWhereUniqueWithoutProjectInputSchema
