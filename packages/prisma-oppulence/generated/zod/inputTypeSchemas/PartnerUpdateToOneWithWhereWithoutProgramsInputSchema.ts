import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema';
import { PartnerUpdateWithoutProgramsInputSchema } from './PartnerUpdateWithoutProgramsInputSchema';
import { PartnerUncheckedUpdateWithoutProgramsInputSchema } from './PartnerUncheckedUpdateWithoutProgramsInputSchema';

export const PartnerUpdateToOneWithWhereWithoutProgramsInputSchema: z.ZodType<Prisma.PartnerUpdateToOneWithWhereWithoutProgramsInput> = z.object({
  where: z.lazy(() => PartnerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PartnerUpdateWithoutProgramsInputSchema),z.lazy(() => PartnerUncheckedUpdateWithoutProgramsInputSchema) ]),
}).strict();

export default PartnerUpdateToOneWithWhereWithoutProgramsInputSchema;
