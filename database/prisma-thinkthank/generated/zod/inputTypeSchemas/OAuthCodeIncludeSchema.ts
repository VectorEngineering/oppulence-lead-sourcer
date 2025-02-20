import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthAppArgsSchema } from "../outputTypeSchemas/OAuthAppArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"

export const OAuthCodeIncludeSchema: z.ZodType<Prisma.OAuthCodeInclude> = z.object({
  oAuthApp: z.union([z.boolean(),z.lazy(() => OAuthAppArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export default OAuthCodeIncludeSchema;
