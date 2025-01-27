import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LinkTagLinkIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.LinkTagLinkIdTagIdCompoundUniqueInput> = z.object({
  linkId: z.string(),
  tagId: z.string()
}).strict();

export default LinkTagLinkIdTagIdCompoundUniqueInputSchema;
