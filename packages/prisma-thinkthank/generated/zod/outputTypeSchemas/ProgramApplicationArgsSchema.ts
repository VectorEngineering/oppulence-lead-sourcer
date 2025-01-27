import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramApplicationSelectSchema } from '../inputTypeSchemas/ProgramApplicationSelectSchema';
import { ProgramApplicationIncludeSchema } from '../inputTypeSchemas/ProgramApplicationIncludeSchema';

export const ProgramApplicationArgsSchema: z.ZodType<Prisma.ProgramApplicationDefaultArgs> = z.object({
  select: z.lazy(() => ProgramApplicationSelectSchema).optional(),
  include: z.lazy(() => ProgramApplicationIncludeSchema).optional(),
}).strict();

export default ProgramApplicationArgsSchema;
