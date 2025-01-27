import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EndpointCountOutputTypeSelectSchema } from './EndpointCountOutputTypeSelectSchema';

export const EndpointCountOutputTypeArgsSchema: z.ZodType<Prisma.EndpointCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => EndpointCountOutputTypeSelectSchema).nullish(),
}).strict();

export default EndpointCountOutputTypeSelectSchema;
