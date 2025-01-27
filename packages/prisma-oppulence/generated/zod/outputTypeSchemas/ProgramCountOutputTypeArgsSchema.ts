import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramCountOutputTypeSelectSchema } from './ProgramCountOutputTypeSelectSchema';

export const ProgramCountOutputTypeArgsSchema: z.ZodType<Prisma.ProgramCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ProgramCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ProgramCountOutputTypeSelectSchema;
