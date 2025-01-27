import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { UserCreateNestedOneWithoutIntegrationsInputSchema } from './UserCreateNestedOneWithoutIntegrationsInputSchema'
import { ProjectCreateNestedOneWithoutIntegrationsInputSchema } from './ProjectCreateNestedOneWithoutIntegrationsInputSchema'
import { InstalledIntegrationCreateNestedManyWithoutIntegrationInputSchema } from './InstalledIntegrationCreateNestedManyWithoutIntegrationInputSchema'

export const IntegrationCreateWithoutOAuthAppInputSchema: z.ZodType<Prisma.IntegrationCreateWithoutOAuthAppInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        slug: z.string(),
        description: z.string().optional().nullable(),
        readme: z.string().optional().nullable(),
        developer: z.string(),
        website: z.string(),
        logo: z.string().optional().nullable(),
        screenshots: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        verified: z.boolean().optional(),
        installUrl: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        user: z.lazy(() => UserCreateNestedOneWithoutIntegrationsInputSchema).optional(),
        project: z.lazy(() => ProjectCreateNestedOneWithoutIntegrationsInputSchema),
        installations: z.lazy(() => InstalledIntegrationCreateNestedManyWithoutIntegrationInputSchema).optional()
    })
    .strict()

export default IntegrationCreateWithoutOAuthAppInputSchema
