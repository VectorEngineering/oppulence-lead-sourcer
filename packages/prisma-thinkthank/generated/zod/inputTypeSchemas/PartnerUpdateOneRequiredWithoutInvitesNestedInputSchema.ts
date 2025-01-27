import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerCreateWithoutInvitesInputSchema } from './PartnerCreateWithoutInvitesInputSchema';
import { PartnerUncheckedCreateWithoutInvitesInputSchema } from './PartnerUncheckedCreateWithoutInvitesInputSchema';
import { PartnerCreateOrConnectWithoutInvitesInputSchema } from './PartnerCreateOrConnectWithoutInvitesInputSchema';
import { PartnerUpsertWithoutInvitesInputSchema } from './PartnerUpsertWithoutInvitesInputSchema';
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema';
import { PartnerUpdateToOneWithWhereWithoutInvitesInputSchema } from './PartnerUpdateToOneWithWhereWithoutInvitesInputSchema';
import { PartnerUpdateWithoutInvitesInputSchema } from './PartnerUpdateWithoutInvitesInputSchema';
import { PartnerUncheckedUpdateWithoutInvitesInputSchema } from './PartnerUncheckedUpdateWithoutInvitesInputSchema';

export const PartnerUpdateOneRequiredWithoutInvitesNestedInputSchema: z.ZodType<Prisma.PartnerUpdateOneRequiredWithoutInvitesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PartnerCreateWithoutInvitesInputSchema),z.lazy(() => PartnerUncheckedCreateWithoutInvitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PartnerCreateOrConnectWithoutInvitesInputSchema).optional(),
  upsert: z.lazy(() => PartnerUpsertWithoutInvitesInputSchema).optional(),
  connect: z.lazy(() => PartnerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PartnerUpdateToOneWithWhereWithoutInvitesInputSchema),z.lazy(() => PartnerUpdateWithoutInvitesInputSchema),z.lazy(() => PartnerUncheckedUpdateWithoutInvitesInputSchema) ]).optional(),
}).strict();

export default PartnerUpdateOneRequiredWithoutInvitesNestedInputSchema;
