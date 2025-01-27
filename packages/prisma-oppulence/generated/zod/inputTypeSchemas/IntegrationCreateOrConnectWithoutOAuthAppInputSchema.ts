import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema';
import { IntegrationCreateWithoutOAuthAppInputSchema } from './IntegrationCreateWithoutOAuthAppInputSchema';
import { IntegrationUncheckedCreateWithoutOAuthAppInputSchema } from './IntegrationUncheckedCreateWithoutOAuthAppInputSchema';

export const IntegrationCreateOrConnectWithoutOAuthAppInputSchema: z.ZodType<Prisma.IntegrationCreateOrConnectWithoutOAuthAppInput> = z.object({
  where: z.lazy(() => IntegrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IntegrationCreateWithoutOAuthAppInputSchema),z.lazy(() => IntegrationUncheckedCreateWithoutOAuthAppInputSchema) ]),
}).strict();

export default IntegrationCreateOrConnectWithoutOAuthAppInputSchema;
