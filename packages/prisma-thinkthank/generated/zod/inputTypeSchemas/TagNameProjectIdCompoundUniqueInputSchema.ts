import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagNameProjectIdCompoundUniqueInputSchema: z.ZodType<Prisma.TagNameProjectIdCompoundUniqueInput> = z.object({
  name: z.string(),
  projectId: z.string()
}).strict();

export default TagNameProjectIdCompoundUniqueInputSchema;
