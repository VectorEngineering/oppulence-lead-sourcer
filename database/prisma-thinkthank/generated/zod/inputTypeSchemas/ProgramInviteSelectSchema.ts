import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramArgsSchema } from "../outputTypeSchemas/ProgramArgsSchema"
import { LinkArgsSchema } from "../outputTypeSchemas/LinkArgsSchema"

export const ProgramInviteSelectSchema: z.ZodType<Prisma.ProgramInviteSelect> = z.object({
  id: z.boolean().optional(),
  programId: z.boolean().optional(),
  email: z.boolean().optional(),
  linkId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  program: z.union([z.boolean(),z.lazy(() => ProgramArgsSchema)]).optional(),
  link: z.union([z.boolean(),z.lazy(() => LinkArgsSchema)]).optional(),
}).strict()

export default ProgramInviteSelectSchema;
