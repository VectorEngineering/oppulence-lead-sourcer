import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthAppCreateWithoutIntegrationInputSchema } from './OAuthAppCreateWithoutIntegrationInputSchema'
import { OAuthAppUncheckedCreateWithoutIntegrationInputSchema } from './OAuthAppUncheckedCreateWithoutIntegrationInputSchema'
import { OAuthAppCreateOrConnectWithoutIntegrationInputSchema } from './OAuthAppCreateOrConnectWithoutIntegrationInputSchema'
import { OAuthAppUpsertWithoutIntegrationInputSchema } from './OAuthAppUpsertWithoutIntegrationInputSchema'
import { OAuthAppWhereInputSchema } from './OAuthAppWhereInputSchema'
import { OAuthAppWhereUniqueInputSchema } from './OAuthAppWhereUniqueInputSchema'
import { OAuthAppUpdateToOneWithWhereWithoutIntegrationInputSchema } from './OAuthAppUpdateToOneWithWhereWithoutIntegrationInputSchema'
import { OAuthAppUpdateWithoutIntegrationInputSchema } from './OAuthAppUpdateWithoutIntegrationInputSchema'
import { OAuthAppUncheckedUpdateWithoutIntegrationInputSchema } from './OAuthAppUncheckedUpdateWithoutIntegrationInputSchema'

export const OAuthAppUncheckedUpdateOneWithoutIntegrationNestedInputSchema: z.ZodType<Prisma.OAuthAppUncheckedUpdateOneWithoutIntegrationNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => OAuthAppCreateWithoutIntegrationInputSchema),
                    z.lazy(() => OAuthAppUncheckedCreateWithoutIntegrationInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => OAuthAppCreateOrConnectWithoutIntegrationInputSchema).optional(),
            upsert: z.lazy(() => OAuthAppUpsertWithoutIntegrationInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => OAuthAppWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => OAuthAppWhereInputSchema)]).optional(),
            connect: z.lazy(() => OAuthAppWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => OAuthAppUpdateToOneWithWhereWithoutIntegrationInputSchema),
                    z.lazy(() => OAuthAppUpdateWithoutIntegrationInputSchema),
                    z.lazy(() => OAuthAppUncheckedUpdateWithoutIntegrationInputSchema)
                ])
                .optional()
        })
        .strict()

export default OAuthAppUncheckedUpdateOneWithoutIntegrationNestedInputSchema
