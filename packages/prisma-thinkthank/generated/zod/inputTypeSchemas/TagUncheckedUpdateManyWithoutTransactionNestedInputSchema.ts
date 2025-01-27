import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagCreateWithoutTransactionInputSchema } from './TagCreateWithoutTransactionInputSchema'
import { TagUncheckedCreateWithoutTransactionInputSchema } from './TagUncheckedCreateWithoutTransactionInputSchema'
import { TagCreateOrConnectWithoutTransactionInputSchema } from './TagCreateOrConnectWithoutTransactionInputSchema'
import { TagUpsertWithWhereUniqueWithoutTransactionInputSchema } from './TagUpsertWithWhereUniqueWithoutTransactionInputSchema'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'
import { TagUpdateWithWhereUniqueWithoutTransactionInputSchema } from './TagUpdateWithWhereUniqueWithoutTransactionInputSchema'
import { TagUpdateManyWithWhereWithoutTransactionInputSchema } from './TagUpdateManyWithWhereWithoutTransactionInputSchema'
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema'

export const TagUncheckedUpdateManyWithoutTransactionNestedInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutTransactionNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TagCreateWithoutTransactionInputSchema),
                    z.lazy(() => TagCreateWithoutTransactionInputSchema).array(),
                    z.lazy(() => TagUncheckedCreateWithoutTransactionInputSchema),
                    z.lazy(() => TagUncheckedCreateWithoutTransactionInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => TagCreateOrConnectWithoutTransactionInputSchema),
                    z.lazy(() => TagCreateOrConnectWithoutTransactionInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => TagUpsertWithWhereUniqueWithoutTransactionInputSchema),
                    z.lazy(() => TagUpsertWithWhereUniqueWithoutTransactionInputSchema).array()
                ])
                .optional(),
            set: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
            disconnect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
            delete: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
            connect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
            update: z
                .union([
                    z.lazy(() => TagUpdateWithWhereUniqueWithoutTransactionInputSchema),
                    z.lazy(() => TagUpdateWithWhereUniqueWithoutTransactionInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => TagUpdateManyWithWhereWithoutTransactionInputSchema),
                    z.lazy(() => TagUpdateManyWithWhereWithoutTransactionInputSchema).array()
                ])
                .optional(),
            deleteMany: z.union([z.lazy(() => TagScalarWhereInputSchema), z.lazy(() => TagScalarWhereInputSchema).array()]).optional()
        })
        .strict()

export default TagUncheckedUpdateManyWithoutTransactionNestedInputSchema
