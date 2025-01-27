import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationCreateWithoutOAuthAppInputSchema } from './IntegrationCreateWithoutOAuthAppInputSchema';
import { IntegrationUncheckedCreateWithoutOAuthAppInputSchema } from './IntegrationUncheckedCreateWithoutOAuthAppInputSchema';
import { IntegrationCreateOrConnectWithoutOAuthAppInputSchema } from './IntegrationCreateOrConnectWithoutOAuthAppInputSchema';
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema';

export const IntegrationCreateNestedOneWithoutOAuthAppInputSchema: z.ZodType<Prisma.IntegrationCreateNestedOneWithoutOAuthAppInput> = z.object({
  create: z.union([ z.lazy(() => IntegrationCreateWithoutOAuthAppInputSchema),z.lazy(() => IntegrationUncheckedCreateWithoutOAuthAppInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IntegrationCreateOrConnectWithoutOAuthAppInputSchema).optional(),
  connect: z.lazy(() => IntegrationWhereUniqueInputSchema).optional()
}).strict();

export default IntegrationCreateNestedOneWithoutOAuthAppInputSchema;
