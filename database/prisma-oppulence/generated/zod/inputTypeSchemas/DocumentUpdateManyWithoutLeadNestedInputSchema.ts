import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentCreateWithoutLeadInputSchema } from './DocumentCreateWithoutLeadInputSchema'
import { DocumentUncheckedCreateWithoutLeadInputSchema } from './DocumentUncheckedCreateWithoutLeadInputSchema'
import { DocumentCreateOrConnectWithoutLeadInputSchema } from './DocumentCreateOrConnectWithoutLeadInputSchema'
import { DocumentUpsertWithWhereUniqueWithoutLeadInputSchema } from './DocumentUpsertWithWhereUniqueWithoutLeadInputSchema'
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema'
import { DocumentUpdateWithWhereUniqueWithoutLeadInputSchema } from './DocumentUpdateWithWhereUniqueWithoutLeadInputSchema'
import { DocumentUpdateManyWithWhereWithoutLeadInputSchema } from './DocumentUpdateManyWithWhereWithoutLeadInputSchema'
import { DocumentScalarWhereInputSchema } from './DocumentScalarWhereInputSchema'

export const DocumentUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.DocumentUpdateManyWithoutLeadNestedInput> = z
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
        upsert: z
            .union([
                z.lazy(() => DocumentUpsertWithWhereUniqueWithoutLeadInputSchema),
                z.lazy(() => DocumentUpsertWithWhereUniqueWithoutLeadInputSchema).array()
            ])
            .optional(),
        set: z.union([z.lazy(() => DocumentWhereUniqueInputSchema), z.lazy(() => DocumentWhereUniqueInputSchema).array()]).optional(),
        disconnect: z
            .union([z.lazy(() => DocumentWhereUniqueInputSchema), z.lazy(() => DocumentWhereUniqueInputSchema).array()])
            .optional(),
        delete: z.union([z.lazy(() => DocumentWhereUniqueInputSchema), z.lazy(() => DocumentWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => DocumentWhereUniqueInputSchema), z.lazy(() => DocumentWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => DocumentUpdateWithWhereUniqueWithoutLeadInputSchema),
                z.lazy(() => DocumentUpdateWithWhereUniqueWithoutLeadInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => DocumentUpdateManyWithWhereWithoutLeadInputSchema),
                z.lazy(() => DocumentUpdateManyWithWhereWithoutLeadInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => DocumentScalarWhereInputSchema), z.lazy(() => DocumentScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default DocumentUpdateManyWithoutLeadNestedInputSchema
