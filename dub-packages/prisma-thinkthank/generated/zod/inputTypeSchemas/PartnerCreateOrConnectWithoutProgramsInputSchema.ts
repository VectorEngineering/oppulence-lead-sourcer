import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema';
import { PartnerCreateWithoutProgramsInputSchema } from './PartnerCreateWithoutProgramsInputSchema';
import { PartnerUncheckedCreateWithoutProgramsInputSchema } from './PartnerUncheckedCreateWithoutProgramsInputSchema';

export const PartnerCreateOrConnectWithoutProgramsInputSchema: z.ZodType<Prisma.PartnerCreateOrConnectWithoutProgramsInput> = z.object({
  where: z.lazy(() => PartnerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PartnerCreateWithoutProgramsInputSchema),z.lazy(() => PartnerUncheckedCreateWithoutProgramsInputSchema) ]),
}).strict();

export default PartnerCreateOrConnectWithoutProgramsInputSchema;
