import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationWhereInputSchema } from './IntegrationWhereInputSchema';
import { IntegrationUpdateWithoutInstallationsInputSchema } from './IntegrationUpdateWithoutInstallationsInputSchema';
import { IntegrationUncheckedUpdateWithoutInstallationsInputSchema } from './IntegrationUncheckedUpdateWithoutInstallationsInputSchema';

export const IntegrationUpdateToOneWithWhereWithoutInstallationsInputSchema: z.ZodType<Prisma.IntegrationUpdateToOneWithWhereWithoutInstallationsInput> = z.object({
  where: z.lazy(() => IntegrationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IntegrationUpdateWithoutInstallationsInputSchema),z.lazy(() => IntegrationUncheckedUpdateWithoutInstallationsInputSchema) ]),
}).strict();

export default IntegrationUpdateToOneWithWhereWithoutInstallationsInputSchema;
