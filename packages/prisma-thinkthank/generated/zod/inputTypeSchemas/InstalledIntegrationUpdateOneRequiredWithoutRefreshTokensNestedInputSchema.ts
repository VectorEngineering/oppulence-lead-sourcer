import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationCreateWithoutRefreshTokensInputSchema } from './InstalledIntegrationCreateWithoutRefreshTokensInputSchema';
import { InstalledIntegrationUncheckedCreateWithoutRefreshTokensInputSchema } from './InstalledIntegrationUncheckedCreateWithoutRefreshTokensInputSchema';
import { InstalledIntegrationCreateOrConnectWithoutRefreshTokensInputSchema } from './InstalledIntegrationCreateOrConnectWithoutRefreshTokensInputSchema';
import { InstalledIntegrationUpsertWithoutRefreshTokensInputSchema } from './InstalledIntegrationUpsertWithoutRefreshTokensInputSchema';
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema';
import { InstalledIntegrationUpdateToOneWithWhereWithoutRefreshTokensInputSchema } from './InstalledIntegrationUpdateToOneWithWhereWithoutRefreshTokensInputSchema';
import { InstalledIntegrationUpdateWithoutRefreshTokensInputSchema } from './InstalledIntegrationUpdateWithoutRefreshTokensInputSchema';
import { InstalledIntegrationUncheckedUpdateWithoutRefreshTokensInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutRefreshTokensInputSchema';

export const InstalledIntegrationUpdateOneRequiredWithoutRefreshTokensNestedInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateOneRequiredWithoutRefreshTokensNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstalledIntegrationCreateWithoutRefreshTokensInputSchema),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutRefreshTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstalledIntegrationCreateOrConnectWithoutRefreshTokensInputSchema).optional(),
  upsert: z.lazy(() => InstalledIntegrationUpsertWithoutRefreshTokensInputSchema).optional(),
  connect: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InstalledIntegrationUpdateToOneWithWhereWithoutRefreshTokensInputSchema),z.lazy(() => InstalledIntegrationUpdateWithoutRefreshTokensInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutRefreshTokensInputSchema) ]).optional(),
}).strict();

export default InstalledIntegrationUpdateOneRequiredWithoutRefreshTokensNestedInputSchema;
