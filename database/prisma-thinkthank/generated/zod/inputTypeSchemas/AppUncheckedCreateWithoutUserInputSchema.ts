import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const AppUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AppUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  appId: z.string(),
  config: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable(),
  settings: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  projectId: z.string()
}).strict();

export default AppUncheckedCreateWithoutUserInputSchema;
