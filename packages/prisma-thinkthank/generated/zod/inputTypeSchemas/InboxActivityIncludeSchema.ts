import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxArgsSchema } from "../outputTypeSchemas/InboxArgsSchema"

export const InboxActivityIncludeSchema: z.ZodType<Prisma.InboxActivityInclude> = z.object({
  inbox: z.union([z.boolean(),z.lazy(() => InboxArgsSchema)]).optional(),
}).strict()

export default InboxActivityIncludeSchema;
