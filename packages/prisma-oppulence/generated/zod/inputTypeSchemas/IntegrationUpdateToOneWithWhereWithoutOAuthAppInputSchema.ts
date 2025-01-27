import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationWhereInputSchema } from './IntegrationWhereInputSchema'
import { IntegrationUpdateWithoutOAuthAppInputSchema } from './IntegrationUpdateWithoutOAuthAppInputSchema'
import { IntegrationUncheckedUpdateWithoutOAuthAppInputSchema } from './IntegrationUncheckedUpdateWithoutOAuthAppInputSchema'

export const IntegrationUpdateToOneWithWhereWithoutOAuthAppInputSchema: z.ZodType<Prisma.IntegrationUpdateToOneWithWhereWithoutOAuthAppInput> =
    z
        .object({
            where: z.lazy(() => IntegrationWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => IntegrationUpdateWithoutOAuthAppInputSchema),
                z.lazy(() => IntegrationUncheckedUpdateWithoutOAuthAppInputSchema)
            ])
        })
        .strict()

export default IntegrationUpdateToOneWithWhereWithoutOAuthAppInputSchema
