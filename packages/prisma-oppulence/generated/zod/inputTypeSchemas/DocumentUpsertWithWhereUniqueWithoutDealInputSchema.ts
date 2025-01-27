import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'
import { DocumentUpdateWithoutDealInputSchema } from './DocumentUpdateWithoutDealInputSchema'
import { DocumentUncheckedUpdateWithoutDealInputSchema } from './DocumentUncheckedUpdateWithoutDealInputSchema'
import { DocumentCreateWithoutDealInputSchema } from './DocumentCreateWithoutDealInputSchema'
import { DocumentUncheckedCreateWithoutDealInputSchema } from './DocumentUncheckedCreateWithoutDealInputSchema'

export const DocumentUpsertWithWhereUniqueWithoutDealInputSchema: z.ZodType<Prisma.DocumentUpsertWithWhereUniqueWithoutDealInput> = z
    .object({
        where: z.lazy(() => DocumentWhereUniqueInputSchema),
        update: z.union([z.lazy(() => DocumentUpdateWithoutDealInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutDealInputSchema)]),
        create: z.union([z.lazy(() => DocumentCreateWithoutDealInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutDealInputSchema)])
    })
    .strict()

export default DocumentUpsertWithWhereUniqueWithoutDealInputSchema
