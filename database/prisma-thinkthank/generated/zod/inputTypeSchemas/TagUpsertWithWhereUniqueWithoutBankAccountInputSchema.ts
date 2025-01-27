import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'
import { TagUpdateWithoutBankAccountInputSchema } from './TagUpdateWithoutBankAccountInputSchema'
import { TagUncheckedUpdateWithoutBankAccountInputSchema } from './TagUncheckedUpdateWithoutBankAccountInputSchema'
import { TagCreateWithoutBankAccountInputSchema } from './TagCreateWithoutBankAccountInputSchema'
import { TagUncheckedCreateWithoutBankAccountInputSchema } from './TagUncheckedCreateWithoutBankAccountInputSchema'

export const TagUpsertWithWhereUniqueWithoutBankAccountInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutBankAccountInput> = z
    .object({
        where: z.lazy(() => TagWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => TagUpdateWithoutBankAccountInputSchema),
            z.lazy(() => TagUncheckedUpdateWithoutBankAccountInputSchema)
        ]),
        create: z.union([
            z.lazy(() => TagCreateWithoutBankAccountInputSchema),
            z.lazy(() => TagUncheckedCreateWithoutBankAccountInputSchema)
        ])
    })
    .strict()

export default TagUpsertWithWhereUniqueWithoutBankAccountInputSchema
