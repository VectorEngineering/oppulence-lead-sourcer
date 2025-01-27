import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationCreateWithoutAccessTokensInputSchema } from './InstalledIntegrationCreateWithoutAccessTokensInputSchema';
import { InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema } from './InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema';
import { InstalledIntegrationCreateOrConnectWithoutAccessTokensInputSchema } from './InstalledIntegrationCreateOrConnectWithoutAccessTokensInputSchema';
import { InstalledIntegrationUpsertWithoutAccessTokensInputSchema } from './InstalledIntegrationUpsertWithoutAccessTokensInputSchema';
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema';
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema';
import { InstalledIntegrationUpdateToOneWithWhereWithoutAccessTokensInputSchema } from './InstalledIntegrationUpdateToOneWithWhereWithoutAccessTokensInputSchema';
import { InstalledIntegrationUpdateWithoutAccessTokensInputSchema } from './InstalledIntegrationUpdateWithoutAccessTokensInputSchema';
import { InstalledIntegrationUncheckedUpdateWithoutAccessTokensInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutAccessTokensInputSchema';

export const InstalledIntegrationUpdateOneWithoutAccessTokensNestedInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateOneWithoutAccessTokensNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstalledIntegrationCreateWithoutAccessTokensInputSchema),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstalledIntegrationCreateOrConnectWithoutAccessTokensInputSchema).optional(),
  upsert: z.lazy(() => InstalledIntegrationUpsertWithoutAccessTokensInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => InstalledIntegrationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => InstalledIntegrationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InstalledIntegrationUpdateToOneWithWhereWithoutAccessTokensInputSchema),z.lazy(() => InstalledIntegrationUpdateWithoutAccessTokensInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutAccessTokensInputSchema) ]).optional(),
}).strict();

export default InstalledIntegrationUpdateOneWithoutAccessTokensNestedInputSchema;
