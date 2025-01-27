import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthAppWhereUniqueInputSchema } from './OAuthAppWhereUniqueInputSchema';
import { OAuthAppCreateWithoutIntegrationInputSchema } from './OAuthAppCreateWithoutIntegrationInputSchema';
import { OAuthAppUncheckedCreateWithoutIntegrationInputSchema } from './OAuthAppUncheckedCreateWithoutIntegrationInputSchema';

export const OAuthAppCreateOrConnectWithoutIntegrationInputSchema: z.ZodType<Prisma.OAuthAppCreateOrConnectWithoutIntegrationInput> = z.object({
  where: z.lazy(() => OAuthAppWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OAuthAppCreateWithoutIntegrationInputSchema),z.lazy(() => OAuthAppUncheckedCreateWithoutIntegrationInputSchema) ]),
}).strict();

export default OAuthAppCreateOrConnectWithoutIntegrationInputSchema;
