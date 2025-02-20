import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramArgsSchema } from "../outputTypeSchemas/ProgramArgsSchema"

export const ProgramResourceIncludeSchema: z.ZodType<Prisma.ProgramResourceInclude> = z.object({
  program: z.union([z.boolean(),z.lazy(() => ProgramArgsSchema)]).optional(),
}).strict()

export default ProgramResourceIncludeSchema;
