import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const InstalledIntegrationUserIdIntegrationIdProjectIdCompoundUniqueInputSchema: z.ZodType<Prisma.InstalledIntegrationUserIdIntegrationIdProjectIdCompoundUniqueInput> = z.object({
  userId: z.string(),
  integrationId: z.string(),
  projectId: z.string()
}).strict();

export default InstalledIntegrationUserIdIntegrationIdProjectIdCompoundUniqueInputSchema;
