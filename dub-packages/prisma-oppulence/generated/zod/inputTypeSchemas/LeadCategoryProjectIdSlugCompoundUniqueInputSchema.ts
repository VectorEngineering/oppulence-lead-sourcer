import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadCategoryProjectIdSlugCompoundUniqueInputSchema: z.ZodType<Prisma.LeadCategoryProjectIdSlugCompoundUniqueInput> = z.object({
  projectId: z.string(),
  slug: z.string()
}).strict();

export default LeadCategoryProjectIdSlugCompoundUniqueInputSchema;
