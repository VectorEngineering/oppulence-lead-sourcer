import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AppIncludeSchema } from '../inputTypeSchemas/AppIncludeSchema'
import { AppWhereUniqueInputSchema } from '../inputTypeSchemas/AppWhereUniqueInputSchema'
import { AppCreateInputSchema } from '../inputTypeSchemas/AppCreateInputSchema'
import { AppUncheckedCreateInputSchema } from '../inputTypeSchemas/AppUncheckedCreateInputSchema'
import { AppUpdateInputSchema } from '../inputTypeSchemas/AppUpdateInputSchema'
import { AppUncheckedUpdateInputSchema } from '../inputTypeSchemas/AppUncheckedUpdateInputSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AppSelectSchema: z.ZodType<Prisma.AppSelect> = z
    .object({
        id: z.boolean().optional(),
        appId: z.boolean().optional(),
        config: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        settings: z.boolean().optional(),
        userId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const AppUpsertArgsSchema: z.ZodType<Prisma.AppUpsertArgs> = z
    .object({
        select: AppSelectSchema.optional(),
        include: AppIncludeSchema.optional(),
        where: AppWhereUniqueInputSchema,
        create: z.union([AppCreateInputSchema, AppUncheckedCreateInputSchema]),
        update: z.union([AppUpdateInputSchema, AppUncheckedUpdateInputSchema])
    })
    .strict()

export default AppUpsertArgsSchema
