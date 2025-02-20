import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationUpdateWithoutOAuthAppInputSchema } from './IntegrationUpdateWithoutOAuthAppInputSchema';
import { IntegrationUncheckedUpdateWithoutOAuthAppInputSchema } from './IntegrationUncheckedUpdateWithoutOAuthAppInputSchema';
import { IntegrationCreateWithoutOAuthAppInputSchema } from './IntegrationCreateWithoutOAuthAppInputSchema';
import { IntegrationUncheckedCreateWithoutOAuthAppInputSchema } from './IntegrationUncheckedCreateWithoutOAuthAppInputSchema';
import { IntegrationWhereInputSchema } from './IntegrationWhereInputSchema';

export const IntegrationUpsertWithoutOAuthAppInputSchema: z.ZodType<Prisma.IntegrationUpsertWithoutOAuthAppInput> = z.object({
  update: z.union([ z.lazy(() => IntegrationUpdateWithoutOAuthAppInputSchema),z.lazy(() => IntegrationUncheckedUpdateWithoutOAuthAppInputSchema) ]),
  create: z.union([ z.lazy(() => IntegrationCreateWithoutOAuthAppInputSchema),z.lazy(() => IntegrationUncheckedCreateWithoutOAuthAppInputSchema) ]),
  where: z.lazy(() => IntegrationWhereInputSchema).optional()
}).strict();

export default IntegrationUpsertWithoutOAuthAppInputSchema;
