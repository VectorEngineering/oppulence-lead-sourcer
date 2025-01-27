import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentCreateWithoutDealInputSchema } from './DocumentCreateWithoutDealInputSchema'
import { DocumentUncheckedCreateWithoutDealInputSchema } from './DocumentUncheckedCreateWithoutDealInputSchema'
import { DocumentCreateOrConnectWithoutDealInputSchema } from './DocumentCreateOrConnectWithoutDealInputSchema'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'

export const DocumentCreateNestedManyWithoutDealInputSchema: z.ZodType<Prisma.DocumentCreateNestedManyWithoutDealInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => DocumentCreateWithoutDealInputSchema),
                z.lazy(() => DocumentCreateWithoutDealInputSchema).array(),
                z.lazy(() => DocumentUncheckedCreateWithoutDealInputSchema),
                z.lazy(() => DocumentUncheckedCreateWithoutDealInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => DocumentCreateOrConnectWithoutDealInputSchema),
                z.lazy(() => DocumentCreateOrConnectWithoutDealInputSchema).array()
            ])
            .optional(),
        connect: z.union([z.lazy(() => DocumentWhereUniqueInputSchema), z.lazy(() => DocumentWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default DocumentCreateNestedManyWithoutDealInputSchema
