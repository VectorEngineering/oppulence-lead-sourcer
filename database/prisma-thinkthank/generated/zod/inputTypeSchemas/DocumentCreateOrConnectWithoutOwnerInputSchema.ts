import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'
import { DocumentCreateWithoutOwnerInputSchema } from './DocumentCreateWithoutOwnerInputSchema'
import { DocumentUncheckedCreateWithoutOwnerInputSchema } from './DocumentUncheckedCreateWithoutOwnerInputSchema'

export const DocumentCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutOwnerInput> = z
    .object({
        where: z.lazy(() => DocumentWhereUniqueInputSchema),
        create: z.union([z.lazy(() => DocumentCreateWithoutOwnerInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutOwnerInputSchema)])
    })
    .strict()

export default DocumentCreateOrConnectWithoutOwnerInputSchema
