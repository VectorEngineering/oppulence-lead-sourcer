import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceFindManyArgsSchema } from '../outputTypeSchemas/WorkspaceFindManyArgsSchema'
import { WorkspaceMemberFindManyArgsSchema } from '../outputTypeSchemas/WorkspaceMemberFindManyArgsSchema'
import { EndpointFindManyArgsSchema } from '../outputTypeSchemas/EndpointFindManyArgsSchema'
import { UserCountOutputTypeArgsSchema } from '../outputTypeSchemas/UserCountOutputTypeArgsSchema'

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z
    .object({
        workspaces: z.union([z.boolean(), z.lazy(() => WorkspaceFindManyArgsSchema)]).optional(),
        workspaceMembers: z.union([z.boolean(), z.lazy(() => WorkspaceMemberFindManyArgsSchema)]).optional(),
        endpoints: z.union([z.boolean(), z.lazy(() => EndpointFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default UserIncludeSchema
