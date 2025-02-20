import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagCreateWithoutBankAccountInputSchema } from './TagCreateWithoutBankAccountInputSchema'
import { TagUncheckedCreateWithoutBankAccountInputSchema } from './TagUncheckedCreateWithoutBankAccountInputSchema'
import { TagCreateOrConnectWithoutBankAccountInputSchema } from './TagCreateOrConnectWithoutBankAccountInputSchema'
import { TagUpsertWithWhereUniqueWithoutBankAccountInputSchema } from './TagUpsertWithWhereUniqueWithoutBankAccountInputSchema'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'
import { TagUpdateWithWhereUniqueWithoutBankAccountInputSchema } from './TagUpdateWithWhereUniqueWithoutBankAccountInputSchema'
import { TagUpdateManyWithWhereWithoutBankAccountInputSchema } from './TagUpdateManyWithWhereWithoutBankAccountInputSchema'
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema'

export const TagUpdateManyWithoutBankAccountNestedInputSchema: z.ZodType<Prisma.TagUpdateManyWithoutBankAccountNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => TagCreateWithoutBankAccountInputSchema),
                z.lazy(() => TagCreateWithoutBankAccountInputSchema).array(),
                z.lazy(() => TagUncheckedCreateWithoutBankAccountInputSchema),
                z.lazy(() => TagUncheckedCreateWithoutBankAccountInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => TagCreateOrConnectWithoutBankAccountInputSchema),
                z.lazy(() => TagCreateOrConnectWithoutBankAccountInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => TagUpsertWithWhereUniqueWithoutBankAccountInputSchema),
                z.lazy(() => TagUpsertWithWhereUniqueWithoutBankAccountInputSchema).array()
            ])
            .optional(),
        set: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => TagUpdateWithWhereUniqueWithoutBankAccountInputSchema),
                z.lazy(() => TagUpdateWithWhereUniqueWithoutBankAccountInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => TagUpdateManyWithWhereWithoutBankAccountInputSchema),
                z.lazy(() => TagUpdateManyWithWhereWithoutBankAccountInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => TagScalarWhereInputSchema), z.lazy(() => TagScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default TagUpdateManyWithoutBankAccountNestedInputSchema
