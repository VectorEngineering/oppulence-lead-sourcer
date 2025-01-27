import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkTagScalarWhereInputSchema } from './LinkTagScalarWhereInputSchema'
import { LinkTagUpdateManyMutationInputSchema } from './LinkTagUpdateManyMutationInputSchema'
import { LinkTagUncheckedUpdateManyWithoutTagInputSchema } from './LinkTagUncheckedUpdateManyWithoutTagInputSchema'

export const LinkTagUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.LinkTagUpdateManyWithWhereWithoutTagInput> = z
    .object({
        where: z.lazy(() => LinkTagScalarWhereInputSchema),
        data: z.union([z.lazy(() => LinkTagUpdateManyMutationInputSchema), z.lazy(() => LinkTagUncheckedUpdateManyWithoutTagInputSchema)])
    })
    .strict()

export default LinkTagUpdateManyWithWhereWithoutTagInputSchema
