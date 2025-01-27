import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationCreateWithoutInstallationsInputSchema } from './IntegrationCreateWithoutInstallationsInputSchema';
import { IntegrationUncheckedCreateWithoutInstallationsInputSchema } from './IntegrationUncheckedCreateWithoutInstallationsInputSchema';
import { IntegrationCreateOrConnectWithoutInstallationsInputSchema } from './IntegrationCreateOrConnectWithoutInstallationsInputSchema';
import { IntegrationUpsertWithoutInstallationsInputSchema } from './IntegrationUpsertWithoutInstallationsInputSchema';
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema';
import { IntegrationUpdateToOneWithWhereWithoutInstallationsInputSchema } from './IntegrationUpdateToOneWithWhereWithoutInstallationsInputSchema';
import { IntegrationUpdateWithoutInstallationsInputSchema } from './IntegrationUpdateWithoutInstallationsInputSchema';
import { IntegrationUncheckedUpdateWithoutInstallationsInputSchema } from './IntegrationUncheckedUpdateWithoutInstallationsInputSchema';

export const IntegrationUpdateOneRequiredWithoutInstallationsNestedInputSchema: z.ZodType<Prisma.IntegrationUpdateOneRequiredWithoutInstallationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => IntegrationCreateWithoutInstallationsInputSchema),z.lazy(() => IntegrationUncheckedCreateWithoutInstallationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IntegrationCreateOrConnectWithoutInstallationsInputSchema).optional(),
  upsert: z.lazy(() => IntegrationUpsertWithoutInstallationsInputSchema).optional(),
  connect: z.lazy(() => IntegrationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IntegrationUpdateToOneWithWhereWithoutInstallationsInputSchema),z.lazy(() => IntegrationUpdateWithoutInstallationsInputSchema),z.lazy(() => IntegrationUncheckedUpdateWithoutInstallationsInputSchema) ]).optional(),
}).strict();

export default IntegrationUpdateOneRequiredWithoutInstallationsNestedInputSchema;
