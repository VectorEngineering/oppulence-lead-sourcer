import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerCreateWithoutApplicationsInputSchema } from './PartnerCreateWithoutApplicationsInputSchema';
import { PartnerUncheckedCreateWithoutApplicationsInputSchema } from './PartnerUncheckedCreateWithoutApplicationsInputSchema';
import { PartnerCreateOrConnectWithoutApplicationsInputSchema } from './PartnerCreateOrConnectWithoutApplicationsInputSchema';
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema';

export const PartnerCreateNestedOneWithoutApplicationsInputSchema: z.ZodType<Prisma.PartnerCreateNestedOneWithoutApplicationsInput> = z.object({
  create: z.union([ z.lazy(() => PartnerCreateWithoutApplicationsInputSchema),z.lazy(() => PartnerUncheckedCreateWithoutApplicationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PartnerCreateOrConnectWithoutApplicationsInputSchema).optional(),
  connect: z.lazy(() => PartnerWhereUniqueInputSchema).optional()
}).strict();

export default PartnerCreateNestedOneWithoutApplicationsInputSchema;
