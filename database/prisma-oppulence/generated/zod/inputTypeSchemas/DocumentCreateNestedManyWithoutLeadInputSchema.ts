import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentCreateWithoutLeadInputSchema } from './DocumentCreateWithoutLeadInputSchema'
import { DocumentUncheckedCreateWithoutLeadInputSchema } from './DocumentUncheckedCreateWithoutLeadInputSchema'
import { DocumentCreateOrConnectWithoutLeadInputSchema } from './DocumentCreateOrConnectWithoutLeadInputSchema'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'

export const DocumentCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.DocumentCreateNestedManyWithoutLeadInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => DocumentCreateWithoutLeadInputSchema),
                z.lazy(() => DocumentCreateWithoutLeadInputSchema).array(),
                z.lazy(() => DocumentUncheckedCreateWithoutLeadInputSchema),
                z.lazy(() => DocumentUncheckedCreateWithoutLeadInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => DocumentCreateOrConnectWithoutLeadInputSchema),
                z.lazy(() => DocumentCreateOrConnectWithoutLeadInputSchema).array()
            ])
            .optional(),
        connect: z.union([z.lazy(() => DocumentWhereUniqueInputSchema), z.lazy(() => DocumentWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default DocumentCreateNestedManyWithoutLeadInputSchema
