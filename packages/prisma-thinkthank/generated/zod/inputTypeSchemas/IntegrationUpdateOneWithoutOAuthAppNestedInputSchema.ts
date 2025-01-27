import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationCreateWithoutOAuthAppInputSchema } from './IntegrationCreateWithoutOAuthAppInputSchema'
import { IntegrationUncheckedCreateWithoutOAuthAppInputSchema } from './IntegrationUncheckedCreateWithoutOAuthAppInputSchema'
import { IntegrationCreateOrConnectWithoutOAuthAppInputSchema } from './IntegrationCreateOrConnectWithoutOAuthAppInputSchema'
import { IntegrationUpsertWithoutOAuthAppInputSchema } from './IntegrationUpsertWithoutOAuthAppInputSchema'
import { IntegrationWhereInputSchema } from './IntegrationWhereInputSchema'
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema'
import { IntegrationUpdateToOneWithWhereWithoutOAuthAppInputSchema } from './IntegrationUpdateToOneWithWhereWithoutOAuthAppInputSchema'
import { IntegrationUpdateWithoutOAuthAppInputSchema } from './IntegrationUpdateWithoutOAuthAppInputSchema'
import { IntegrationUncheckedUpdateWithoutOAuthAppInputSchema } from './IntegrationUncheckedUpdateWithoutOAuthAppInputSchema'

export const IntegrationUpdateOneWithoutOAuthAppNestedInputSchema: z.ZodType<Prisma.IntegrationUpdateOneWithoutOAuthAppNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => IntegrationCreateWithoutOAuthAppInputSchema),
                z.lazy(() => IntegrationUncheckedCreateWithoutOAuthAppInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => IntegrationCreateOrConnectWithoutOAuthAppInputSchema).optional(),
        upsert: z.lazy(() => IntegrationUpsertWithoutOAuthAppInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => IntegrationWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => IntegrationWhereInputSchema)]).optional(),
        connect: z.lazy(() => IntegrationWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => IntegrationUpdateToOneWithWhereWithoutOAuthAppInputSchema),
                z.lazy(() => IntegrationUpdateWithoutOAuthAppInputSchema),
                z.lazy(() => IntegrationUncheckedUpdateWithoutOAuthAppInputSchema)
            ])
            .optional()
    })
    .strict()

export default IntegrationUpdateOneWithoutOAuthAppNestedInputSchema
