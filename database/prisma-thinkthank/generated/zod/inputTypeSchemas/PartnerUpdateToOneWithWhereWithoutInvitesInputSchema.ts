import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema';
import { PartnerUpdateWithoutInvitesInputSchema } from './PartnerUpdateWithoutInvitesInputSchema';
import { PartnerUncheckedUpdateWithoutInvitesInputSchema } from './PartnerUncheckedUpdateWithoutInvitesInputSchema';

export const PartnerUpdateToOneWithWhereWithoutInvitesInputSchema: z.ZodType<Prisma.PartnerUpdateToOneWithWhereWithoutInvitesInput> = z.object({
  where: z.lazy(() => PartnerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PartnerUpdateWithoutInvitesInputSchema),z.lazy(() => PartnerUncheckedUpdateWithoutInvitesInputSchema) ]),
}).strict();

export default PartnerUpdateToOneWithWhereWithoutInvitesInputSchema;
