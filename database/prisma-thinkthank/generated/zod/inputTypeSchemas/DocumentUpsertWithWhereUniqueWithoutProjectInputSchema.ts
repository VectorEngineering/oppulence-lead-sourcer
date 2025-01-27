import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'
import { DocumentUpdateWithoutProjectInputSchema } from './DocumentUpdateWithoutProjectInputSchema'
import { DocumentUncheckedUpdateWithoutProjectInputSchema } from './DocumentUncheckedUpdateWithoutProjectInputSchema'
import { DocumentCreateWithoutProjectInputSchema } from './DocumentCreateWithoutProjectInputSchema'
import { DocumentUncheckedCreateWithoutProjectInputSchema } from './DocumentUncheckedCreateWithoutProjectInputSchema'

export const DocumentUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.DocumentUpsertWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => DocumentWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => DocumentUpdateWithoutProjectInputSchema),
            z.lazy(() => DocumentUncheckedUpdateWithoutProjectInputSchema)
        ]),
        create: z.union([
            z.lazy(() => DocumentCreateWithoutProjectInputSchema),
            z.lazy(() => DocumentUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default DocumentUpsertWithWhereUniqueWithoutProjectInputSchema
