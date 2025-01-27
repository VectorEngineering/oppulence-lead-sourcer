import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerUpdateWithoutProgramsInputSchema } from './PartnerUpdateWithoutProgramsInputSchema';
import { PartnerUncheckedUpdateWithoutProgramsInputSchema } from './PartnerUncheckedUpdateWithoutProgramsInputSchema';
import { PartnerCreateWithoutProgramsInputSchema } from './PartnerCreateWithoutProgramsInputSchema';
import { PartnerUncheckedCreateWithoutProgramsInputSchema } from './PartnerUncheckedCreateWithoutProgramsInputSchema';
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema';

export const PartnerUpsertWithoutProgramsInputSchema: z.ZodType<Prisma.PartnerUpsertWithoutProgramsInput> = z.object({
  update: z.union([ z.lazy(() => PartnerUpdateWithoutProgramsInputSchema),z.lazy(() => PartnerUncheckedUpdateWithoutProgramsInputSchema) ]),
  create: z.union([ z.lazy(() => PartnerCreateWithoutProgramsInputSchema),z.lazy(() => PartnerUncheckedCreateWithoutProgramsInputSchema) ]),
  where: z.lazy(() => PartnerWhereInputSchema).optional()
}).strict();

export default PartnerUpsertWithoutProgramsInputSchema;
