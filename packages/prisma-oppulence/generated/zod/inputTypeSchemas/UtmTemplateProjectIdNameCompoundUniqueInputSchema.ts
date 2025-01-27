import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UtmTemplateProjectIdNameCompoundUniqueInputSchema: z.ZodType<Prisma.UtmTemplateProjectIdNameCompoundUniqueInput> = z.object({
  projectId: z.string(),
  name: z.string()
}).strict();

export default UtmTemplateProjectIdNameCompoundUniqueInputSchema;
