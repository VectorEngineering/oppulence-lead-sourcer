import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema';
import { IntegrationCreateWithoutInstallationsInputSchema } from './IntegrationCreateWithoutInstallationsInputSchema';
import { IntegrationUncheckedCreateWithoutInstallationsInputSchema } from './IntegrationUncheckedCreateWithoutInstallationsInputSchema';

export const IntegrationCreateOrConnectWithoutInstallationsInputSchema: z.ZodType<Prisma.IntegrationCreateOrConnectWithoutInstallationsInput> = z.object({
  where: z.lazy(() => IntegrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IntegrationCreateWithoutInstallationsInputSchema),z.lazy(() => IntegrationUncheckedCreateWithoutInstallationsInputSchema) ]),
}).strict();

export default IntegrationCreateOrConnectWithoutInstallationsInputSchema;
