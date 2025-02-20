import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { IntegrationIncludeSchema } from '../inputTypeSchemas/IntegrationIncludeSchema'
import { IntegrationWhereUniqueInputSchema } from '../inputTypeSchemas/IntegrationWhereUniqueInputSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { OAuthAppArgsSchema } from '../outputTypeSchemas/OAuthAppArgsSchema'
import { InstalledIntegrationFindManyArgsSchema } from '../outputTypeSchemas/InstalledIntegrationFindManyArgsSchema'
import { IntegrationCountOutputTypeArgsSchema } from '../outputTypeSchemas/IntegrationCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IntegrationSelectSchema: z.ZodType<Prisma.IntegrationSelect> = z
    .object({
        id: z.boolean().optional(),
        userId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        name: z.boolean().optional(),
        slug: z.boolean().optional(),
        description: z.boolean().optional(),
        readme: z.boolean().optional(),
        developer: z.boolean().optional(),
        website: z.boolean().optional(),
        logo: z.boolean().optional(),
        screenshots: z.boolean().optional(),
        verified: z.boolean().optional(),
        installUrl: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        oAuthApp: z.union([z.boolean(), z.lazy(() => OAuthAppArgsSchema)]).optional(),
        installations: z.union([z.boolean(), z.lazy(() => InstalledIntegrationFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => IntegrationCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const IntegrationDeleteArgsSchema: z.ZodType<Prisma.IntegrationDeleteArgs> = z
    .object({
        select: IntegrationSelectSchema.optional(),
        include: IntegrationIncludeSchema.optional(),
        where: IntegrationWhereUniqueInputSchema
    })
    .strict()

export default IntegrationDeleteArgsSchema
