import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema';
import { ProgramApplicationUpdateWithoutPartnerInputSchema } from './ProgramApplicationUpdateWithoutPartnerInputSchema';
import { ProgramApplicationUncheckedUpdateWithoutPartnerInputSchema } from './ProgramApplicationUncheckedUpdateWithoutPartnerInputSchema';

export const ProgramApplicationUpdateWithWhereUniqueWithoutPartnerInputSchema: z.ZodType<Prisma.ProgramApplicationUpdateWithWhereUniqueWithoutPartnerInput> = z.object({
  where: z.lazy(() => ProgramApplicationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProgramApplicationUpdateWithoutPartnerInputSchema),z.lazy(() => ProgramApplicationUncheckedUpdateWithoutPartnerInputSchema) ]),
}).strict();

export default ProgramApplicationUpdateWithWhereUniqueWithoutPartnerInputSchema;
