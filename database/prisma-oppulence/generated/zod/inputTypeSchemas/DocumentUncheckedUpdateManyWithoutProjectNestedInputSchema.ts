import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentCreateWithoutProjectInputSchema } from './DocumentCreateWithoutProjectInputSchema'
import { DocumentUncheckedCreateWithoutProjectInputSchema } from './DocumentUncheckedCreateWithoutProjectInputSchema'
import { DocumentCreateOrConnectWithoutProjectInputSchema } from './DocumentCreateOrConnectWithoutProjectInputSchema'
import { DocumentUpsertWithWhereUniqueWithoutProjectInputSchema } from './DocumentUpsertWithWhereUniqueWithoutProjectInputSchema'
import { DocumentCreateManyProjectInputEnvelopeSchema } from './DocumentCreateManyProjectInputEnvelopeSchema'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'
import { DocumentUpdateWithWhereUniqueWithoutProjectInputSchema } from './DocumentUpdateWithWhereUniqueWithoutProjectInputSchema'
import { DocumentUpdateManyWithWhereWithoutProjectInputSchema } from './DocumentUpdateManyWithWhereWithoutProjectInputSchema'
import { DocumentScalarWhereInputSchema } from './DocumentScalarWhereInputSchema'

export const DocumentUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.DocumentUncheckedUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => DocumentCreateWithoutProjectInputSchema),
                    z.lazy(() => DocumentCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => DocumentUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => DocumentUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => DocumentCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => DocumentCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => DocumentUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => DocumentUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => DocumentCreateManyProjectInputEnvelopeSchema).optional(),
            set: z.union([z.lazy(() => DocumentWhereUniqueInputSchema), z.lazy(() => DocumentWhereUniqueInputSchema).array()]).optional(),
            disconnect: z
                .union([z.lazy(() => DocumentWhereUniqueInputSchema), z.lazy(() => DocumentWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => DocumentWhereUniqueInputSchema), z.lazy(() => DocumentWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => DocumentWhereUniqueInputSchema), z.lazy(() => DocumentWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => DocumentUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => DocumentUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => DocumentUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => DocumentUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => DocumentScalarWhereInputSchema), z.lazy(() => DocumentScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default DocumentUncheckedUpdateManyWithoutProjectNestedInputSchema
