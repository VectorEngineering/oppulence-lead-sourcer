import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentCreateWithoutOwnerInputSchema } from './DocumentCreateWithoutOwnerInputSchema'
import { DocumentUncheckedCreateWithoutOwnerInputSchema } from './DocumentUncheckedCreateWithoutOwnerInputSchema'
import { DocumentCreateOrConnectWithoutOwnerInputSchema } from './DocumentCreateOrConnectWithoutOwnerInputSchema'
import { DocumentCreateManyOwnerInputEnvelopeSchema } from './DocumentCreateManyOwnerInputEnvelopeSchema'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'

export const DocumentUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.DocumentUncheckedCreateNestedManyWithoutOwnerInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => DocumentCreateWithoutOwnerInputSchema),
                    z.lazy(() => DocumentCreateWithoutOwnerInputSchema).array(),
                    z.lazy(() => DocumentUncheckedCreateWithoutOwnerInputSchema),
                    z.lazy(() => DocumentUncheckedCreateWithoutOwnerInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => DocumentCreateOrConnectWithoutOwnerInputSchema),
                    z.lazy(() => DocumentCreateOrConnectWithoutOwnerInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => DocumentCreateManyOwnerInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => DocumentWhereUniqueInputSchema), z.lazy(() => DocumentWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default DocumentUncheckedCreateNestedManyWithoutOwnerInputSchema
