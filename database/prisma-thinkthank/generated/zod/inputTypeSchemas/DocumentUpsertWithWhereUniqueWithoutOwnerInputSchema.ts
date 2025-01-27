import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'
import { DocumentUpdateWithoutOwnerInputSchema } from './DocumentUpdateWithoutOwnerInputSchema'
import { DocumentUncheckedUpdateWithoutOwnerInputSchema } from './DocumentUncheckedUpdateWithoutOwnerInputSchema'
import { DocumentCreateWithoutOwnerInputSchema } from './DocumentCreateWithoutOwnerInputSchema'
import { DocumentUncheckedCreateWithoutOwnerInputSchema } from './DocumentUncheckedCreateWithoutOwnerInputSchema'

export const DocumentUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.DocumentUpsertWithWhereUniqueWithoutOwnerInput> = z
    .object({
        where: z.lazy(() => DocumentWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => DocumentUpdateWithoutOwnerInputSchema),
            z.lazy(() => DocumentUncheckedUpdateWithoutOwnerInputSchema)
        ]),
        create: z.union([z.lazy(() => DocumentCreateWithoutOwnerInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutOwnerInputSchema)])
    })
    .strict()

export default DocumentUpsertWithWhereUniqueWithoutOwnerInputSchema
