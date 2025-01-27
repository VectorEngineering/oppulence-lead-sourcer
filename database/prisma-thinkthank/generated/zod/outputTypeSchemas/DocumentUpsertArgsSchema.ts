import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DocumentIncludeSchema } from '../inputTypeSchemas/DocumentIncludeSchema'
import { DocumentWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentWhereUniqueInputSchema'
import { DocumentCreateInputSchema } from '../inputTypeSchemas/DocumentCreateInputSchema'
import { DocumentUncheckedCreateInputSchema } from '../inputTypeSchemas/DocumentUncheckedCreateInputSchema'
import { DocumentUpdateInputSchema } from '../inputTypeSchemas/DocumentUpdateInputSchema'
import { DocumentUncheckedUpdateInputSchema } from '../inputTypeSchemas/DocumentUncheckedUpdateInputSchema'
import { UserArgsSchema } from './UserArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DocumentSelectSchema: z.ZodType<Prisma.DocumentSelect> = z
    .object({
        id: z.boolean().optional(),
        body: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        metadata: z.boolean().optional(),
        name: z.boolean().optional(),
        objectId: z.boolean().optional(),
        ownerId: z.boolean().optional(),
        parentId: z.boolean().optional(),
        pathTokens: z.boolean().optional(),
        tag: z.boolean().optional(),
        projectId: z.boolean().optional(),
        title: z.boolean().optional(),
        owner: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const DocumentUpsertArgsSchema: z.ZodType<Prisma.DocumentUpsertArgs> = z
    .object({
        select: DocumentSelectSchema.optional(),
        include: DocumentIncludeSchema.optional(),
        where: DocumentWhereUniqueInputSchema,
        create: z.union([DocumentCreateInputSchema, DocumentUncheckedCreateInputSchema]),
        update: z.union([DocumentUpdateInputSchema, DocumentUncheckedUpdateInputSchema])
    })
    .strict()

export default DocumentUpsertArgsSchema
