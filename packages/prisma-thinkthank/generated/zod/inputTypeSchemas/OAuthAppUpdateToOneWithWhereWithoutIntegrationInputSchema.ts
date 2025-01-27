import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthAppWhereInputSchema } from './OAuthAppWhereInputSchema'
import { OAuthAppUpdateWithoutIntegrationInputSchema } from './OAuthAppUpdateWithoutIntegrationInputSchema'
import { OAuthAppUncheckedUpdateWithoutIntegrationInputSchema } from './OAuthAppUncheckedUpdateWithoutIntegrationInputSchema'

export const OAuthAppUpdateToOneWithWhereWithoutIntegrationInputSchema: z.ZodType<Prisma.OAuthAppUpdateToOneWithWhereWithoutIntegrationInput> =
    z
        .object({
            where: z.lazy(() => OAuthAppWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => OAuthAppUpdateWithoutIntegrationInputSchema),
                z.lazy(() => OAuthAppUncheckedUpdateWithoutIntegrationInputSchema)
            ])
        })
        .strict()

export default OAuthAppUpdateToOneWithWhereWithoutIntegrationInputSchema
