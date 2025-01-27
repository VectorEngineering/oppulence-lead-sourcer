import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema'
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema'
import { TagUncheckedUpdateManyWithoutBankAccountInputSchema } from './TagUncheckedUpdateManyWithoutBankAccountInputSchema'

export const TagUpdateManyWithWhereWithoutBankAccountInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutBankAccountInput> = z
    .object({
        where: z.lazy(() => TagScalarWhereInputSchema),
        data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutBankAccountInputSchema)])
    })
    .strict()

export default TagUpdateManyWithWhereWithoutBankAccountInputSchema
