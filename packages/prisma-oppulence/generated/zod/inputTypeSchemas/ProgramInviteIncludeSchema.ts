import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramArgsSchema } from "../outputTypeSchemas/ProgramArgsSchema"
import { LinkArgsSchema } from "../outputTypeSchemas/LinkArgsSchema"

export const ProgramInviteIncludeSchema: z.ZodType<Prisma.ProgramInviteInclude> = z.object({
  program: z.union([z.boolean(),z.lazy(() => ProgramArgsSchema)]).optional(),
  link: z.union([z.boolean(),z.lazy(() => LinkArgsSchema)]).optional(),
}).strict()

export default ProgramInviteIncludeSchema;
