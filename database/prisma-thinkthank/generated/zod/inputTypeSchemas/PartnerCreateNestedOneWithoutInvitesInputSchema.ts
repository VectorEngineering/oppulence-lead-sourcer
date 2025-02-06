import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerCreateWithoutInvitesInputSchema } from './PartnerCreateWithoutInvitesInputSchema';
import { PartnerUncheckedCreateWithoutInvitesInputSchema } from './PartnerUncheckedCreateWithoutInvitesInputSchema';
import { PartnerCreateOrConnectWithoutInvitesInputSchema } from './PartnerCreateOrConnectWithoutInvitesInputSchema';
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema';

export const PartnerCreateNestedOneWithoutInvitesInputSchema: z.ZodType<Prisma.PartnerCreateNestedOneWithoutInvitesInput> = z.object({
  create: z.union([ z.lazy(() => PartnerCreateWithoutInvitesInputSchema),z.lazy(() => PartnerUncheckedCreateWithoutInvitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PartnerCreateOrConnectWithoutInvitesInputSchema).optional(),
  connect: z.lazy(() => PartnerWhereUniqueInputSchema).optional()
}).strict();

export default PartnerCreateNestedOneWithoutInvitesInputSchema;
