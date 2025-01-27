import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthAppUpdateWithoutIntegrationInputSchema } from './OAuthAppUpdateWithoutIntegrationInputSchema';
import { OAuthAppUncheckedUpdateWithoutIntegrationInputSchema } from './OAuthAppUncheckedUpdateWithoutIntegrationInputSchema';
import { OAuthAppCreateWithoutIntegrationInputSchema } from './OAuthAppCreateWithoutIntegrationInputSchema';
import { OAuthAppUncheckedCreateWithoutIntegrationInputSchema } from './OAuthAppUncheckedCreateWithoutIntegrationInputSchema';
import { OAuthAppWhereInputSchema } from './OAuthAppWhereInputSchema';

export const OAuthAppUpsertWithoutIntegrationInputSchema: z.ZodType<Prisma.OAuthAppUpsertWithoutIntegrationInput> = z.object({
  update: z.union([ z.lazy(() => OAuthAppUpdateWithoutIntegrationInputSchema),z.lazy(() => OAuthAppUncheckedUpdateWithoutIntegrationInputSchema) ]),
  create: z.union([ z.lazy(() => OAuthAppCreateWithoutIntegrationInputSchema),z.lazy(() => OAuthAppUncheckedCreateWithoutIntegrationInputSchema) ]),
  where: z.lazy(() => OAuthAppWhereInputSchema).optional()
}).strict();

export default OAuthAppUpsertWithoutIntegrationInputSchema;
