import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { OAuthRefreshTokenFindManyArgsSchema } from "../outputTypeSchemas/OAuthRefreshTokenFindManyArgsSchema"
import { InstalledIntegrationArgsSchema } from "../outputTypeSchemas/InstalledIntegrationArgsSchema"
import { RestrictedTokenCountOutputTypeArgsSchema } from "../outputTypeSchemas/RestrictedTokenCountOutputTypeArgsSchema"

export const RestrictedTokenIncludeSchema: z.ZodType<Prisma.RestrictedTokenInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  refreshTokens: z.union([z.boolean(),z.lazy(() => OAuthRefreshTokenFindManyArgsSchema)]).optional(),
  installedIntegration: z.union([z.boolean(),z.lazy(() => InstalledIntegrationArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RestrictedTokenCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default RestrictedTokenIncludeSchema;
