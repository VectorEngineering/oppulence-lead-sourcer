import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema';
import { PartnerUpdateWithoutApplicationsInputSchema } from './PartnerUpdateWithoutApplicationsInputSchema';
import { PartnerUncheckedUpdateWithoutApplicationsInputSchema } from './PartnerUncheckedUpdateWithoutApplicationsInputSchema';

export const PartnerUpdateToOneWithWhereWithoutApplicationsInputSchema: z.ZodType<Prisma.PartnerUpdateToOneWithWhereWithoutApplicationsInput> = z.object({
  where: z.lazy(() => PartnerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PartnerUpdateWithoutApplicationsInputSchema),z.lazy(() => PartnerUncheckedUpdateWithoutApplicationsInputSchema) ]),
}).strict();

export default PartnerUpdateToOneWithWhereWithoutApplicationsInputSchema;
