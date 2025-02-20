import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema';
import { IntegrationCreateWithoutUserInputSchema } from './IntegrationCreateWithoutUserInputSchema';
import { IntegrationUncheckedCreateWithoutUserInputSchema } from './IntegrationUncheckedCreateWithoutUserInputSchema';

export const IntegrationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.IntegrationCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => IntegrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IntegrationCreateWithoutUserInputSchema),z.lazy(() => IntegrationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default IntegrationCreateOrConnectWithoutUserInputSchema;
