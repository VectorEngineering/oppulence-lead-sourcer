import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestrictedTokenIncludeSchema } from '../inputTypeSchemas/RestrictedTokenIncludeSchema'
import { RestrictedTokenWhereUniqueInputSchema } from '../inputTypeSchemas/RestrictedTokenWhereUniqueInputSchema'
import { RestrictedTokenCreateInputSchema } from '../inputTypeSchemas/RestrictedTokenCreateInputSchema'
import { RestrictedTokenUncheckedCreateInputSchema } from '../inputTypeSchemas/RestrictedTokenUncheckedCreateInputSchema'
import { RestrictedTokenUpdateInputSchema } from '../inputTypeSchemas/RestrictedTokenUpdateInputSchema'
import { RestrictedTokenUncheckedUpdateInputSchema } from '../inputTypeSchemas/RestrictedTokenUncheckedUpdateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { OAuthRefreshTokenFindManyArgsSchema } from "../outputTypeSchemas/OAuthRefreshTokenFindManyArgsSchema"
import { InstalledIntegrationArgsSchema } from "../outputTypeSchemas/InstalledIntegrationArgsSchema"
import { RestrictedTokenCountOutputTypeArgsSchema } from "../outputTypeSchemas/RestrictedTokenCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RestrictedTokenSelectSchema: z.ZodType<Prisma.RestrictedTokenSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  hashedKey: z.boolean().optional(),
  partialKey: z.boolean().optional(),
  scopes: z.boolean().optional(),
  expires: z.boolean().optional(),
  lastUsed: z.boolean().optional(),
  rateLimit: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  installationId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  refreshTokens: z.union([z.boolean(),z.lazy(() => OAuthRefreshTokenFindManyArgsSchema)]).optional(),
  installedIntegration: z.union([z.boolean(),z.lazy(() => InstalledIntegrationArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RestrictedTokenCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RestrictedTokenUpsertArgsSchema: z.ZodType<Prisma.RestrictedTokenUpsertArgs> = z.object({
  select: RestrictedTokenSelectSchema.optional(),
  include: RestrictedTokenIncludeSchema.optional(),
  where: RestrictedTokenWhereUniqueInputSchema,
  create: z.union([ RestrictedTokenCreateInputSchema,RestrictedTokenUncheckedCreateInputSchema ]),
  update: z.union([ RestrictedTokenUpdateInputSchema,RestrictedTokenUncheckedUpdateInputSchema ]),
}).strict() ;

export default RestrictedTokenUpsertArgsSchema;
