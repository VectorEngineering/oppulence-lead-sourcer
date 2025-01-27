import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const EndpointCountOutputTypeSelectSchema: z.ZodType<Prisma.EndpointCountOutputTypeSelect> = z.object({
  leads: z.boolean().optional(),
  logs: z.boolean().optional(),
}).strict();

export default EndpointCountOutputTypeSelectSchema;
