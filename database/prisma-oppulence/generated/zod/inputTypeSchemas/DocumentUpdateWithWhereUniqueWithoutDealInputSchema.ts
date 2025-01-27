import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'
import { DocumentUpdateWithoutDealInputSchema } from './DocumentUpdateWithoutDealInputSchema'
import { DocumentUncheckedUpdateWithoutDealInputSchema } from './DocumentUncheckedUpdateWithoutDealInputSchema'

export const DocumentUpdateWithWhereUniqueWithoutDealInputSchema: z.ZodType<Prisma.DocumentUpdateWithWhereUniqueWithoutDealInput> = z
    .object({
        where: z.lazy(() => DocumentWhereUniqueInputSchema),
        data: z.union([z.lazy(() => DocumentUpdateWithoutDealInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutDealInputSchema)])
    })
    .strict()

export default DocumentUpdateWithWhereUniqueWithoutDealInputSchema
