import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { OAuthAppArgsSchema } from "../outputTypeSchemas/OAuthAppArgsSchema"
import { InstalledIntegrationFindManyArgsSchema } from "../outputTypeSchemas/InstalledIntegrationFindManyArgsSchema"
import { IntegrationCountOutputTypeArgsSchema } from "../outputTypeSchemas/IntegrationCountOutputTypeArgsSchema"

export const IntegrationIncludeSchema: z.ZodType<Prisma.IntegrationInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  oAuthApp: z.union([z.boolean(),z.lazy(() => OAuthAppArgsSchema)]).optional(),
  installations: z.union([z.boolean(),z.lazy(() => InstalledIntegrationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IntegrationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default IntegrationIncludeSchema;
