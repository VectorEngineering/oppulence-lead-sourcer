import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentCreateWithoutDealInputSchema } from './DocumentCreateWithoutDealInputSchema'
import { DocumentUncheckedCreateWithoutDealInputSchema } from './DocumentUncheckedCreateWithoutDealInputSchema'
import { DocumentCreateOrConnectWithoutDealInputSchema } from './DocumentCreateOrConnectWithoutDealInputSchema'
import { DocumentUpsertWithWhereUniqueWithoutDealInputSchema } from './DocumentUpsertWithWhereUniqueWithoutDealInputSchema'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'
import { DocumentUpdateWithWhereUniqueWithoutDealInputSchema } from './DocumentUpdateWithWhereUniqueWithoutDealInputSchema'
import { DocumentUpdateManyWithWhereWithoutDealInputSchema } from './DocumentUpdateManyWithWhereWithoutDealInputSchema'
import { DocumentScalarWhereInputSchema } from './DocumentScalarWhereInputSchema'

export const DocumentUncheckedUpdateManyWithoutDealNestedInputSchema: z.ZodType<Prisma.DocumentUncheckedUpdateManyWithoutDealNestedInput> =
    z
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
            upsert: z
                .union([
                    z.lazy(() => DocumentUpsertWithWhereUniqueWithoutDealInputSchema),
                    z.lazy(() => DocumentUpsertWithWhereUniqueWithoutDealInputSchema).array()
                ])
                .optional(),
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
                    z.lazy(() => DocumentUpdateWithWhereUniqueWithoutDealInputSchema),
                    z.lazy(() => DocumentUpdateWithWhereUniqueWithoutDealInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => DocumentUpdateManyWithWhereWithoutDealInputSchema),
                    z.lazy(() => DocumentUpdateManyWithWhereWithoutDealInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => DocumentScalarWhereInputSchema), z.lazy(() => DocumentScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default DocumentUncheckedUpdateManyWithoutDealNestedInputSchema
