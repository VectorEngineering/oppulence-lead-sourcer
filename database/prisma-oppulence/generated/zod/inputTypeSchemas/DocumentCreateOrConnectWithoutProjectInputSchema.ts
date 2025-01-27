import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'
import { DocumentCreateWithoutProjectInputSchema } from './DocumentCreateWithoutProjectInputSchema'
import { DocumentUncheckedCreateWithoutProjectInputSchema } from './DocumentUncheckedCreateWithoutProjectInputSchema'

export const DocumentCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => DocumentWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => DocumentCreateWithoutProjectInputSchema),
            z.lazy(() => DocumentUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default DocumentCreateOrConnectWithoutProjectInputSchema
