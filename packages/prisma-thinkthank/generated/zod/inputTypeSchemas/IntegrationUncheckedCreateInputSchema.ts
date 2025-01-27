import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { OAuthAppUncheckedCreateNestedOneWithoutIntegrationInputSchema } from './OAuthAppUncheckedCreateNestedOneWithoutIntegrationInputSchema';
import { InstalledIntegrationUncheckedCreateNestedManyWithoutIntegrationInputSchema } from './InstalledIntegrationUncheckedCreateNestedManyWithoutIntegrationInputSchema';

export const IntegrationUncheckedCreateInputSchema: z.ZodType<Prisma.IntegrationUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().optional().nullable(),
  projectId: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  readme: z.string().optional().nullable(),
  developer: z.string(),
  website: z.string(),
  logo: z.string().optional().nullable(),
  screenshots: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  verified: z.boolean().optional(),
  installUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  oAuthApp: z.lazy(() => OAuthAppUncheckedCreateNestedOneWithoutIntegrationInputSchema).optional(),
  installations: z.lazy(() => InstalledIntegrationUncheckedCreateNestedManyWithoutIntegrationInputSchema).optional()
}).strict();

export default IntegrationUncheckedCreateInputSchema;
