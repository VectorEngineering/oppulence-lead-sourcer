import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenScalarWhereInputSchema } from './RestrictedTokenScalarWhereInputSchema'
import { RestrictedTokenUpdateManyMutationInputSchema } from './RestrictedTokenUpdateManyMutationInputSchema'
import { RestrictedTokenUncheckedUpdateManyWithoutUserInputSchema } from './RestrictedTokenUncheckedUpdateManyWithoutUserInputSchema'

export const RestrictedTokenUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.RestrictedTokenUpdateManyWithWhereWithoutUserInput> =
    z
        .object({
            where: z.lazy(() => RestrictedTokenScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => RestrictedTokenUpdateManyMutationInputSchema),
                z.lazy(() => RestrictedTokenUncheckedUpdateManyWithoutUserInputSchema)
            ])
        })
        .strict()

export default RestrictedTokenUpdateManyWithWhereWithoutUserInputSchema
