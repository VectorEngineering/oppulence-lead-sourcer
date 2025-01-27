import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LinkProjectIdExternalIdCompoundUniqueInputSchema: z.ZodType<Prisma.LinkProjectIdExternalIdCompoundUniqueInput> = z.object({
  projectId: z.string(),
  externalId: z.string()
}).strict();

export default LinkProjectIdExternalIdCompoundUniqueInputSchema;
