import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z
    .object({
        workspaces: z.boolean().optional(),
        workspaceMembers: z.boolean().optional(),
        endpoints: z.boolean().optional()
    })
    .strict()

export default UserCountOutputTypeSelectSchema
