import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerCreateWithoutProgramsInputSchema } from './PartnerCreateWithoutProgramsInputSchema';
import { PartnerUncheckedCreateWithoutProgramsInputSchema } from './PartnerUncheckedCreateWithoutProgramsInputSchema';
import { PartnerCreateOrConnectWithoutProgramsInputSchema } from './PartnerCreateOrConnectWithoutProgramsInputSchema';
import { PartnerUpsertWithoutProgramsInputSchema } from './PartnerUpsertWithoutProgramsInputSchema';
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema';
import { PartnerUpdateToOneWithWhereWithoutProgramsInputSchema } from './PartnerUpdateToOneWithWhereWithoutProgramsInputSchema';
import { PartnerUpdateWithoutProgramsInputSchema } from './PartnerUpdateWithoutProgramsInputSchema';
import { PartnerUncheckedUpdateWithoutProgramsInputSchema } from './PartnerUncheckedUpdateWithoutProgramsInputSchema';

export const PartnerUpdateOneRequiredWithoutProgramsNestedInputSchema: z.ZodType<Prisma.PartnerUpdateOneRequiredWithoutProgramsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PartnerCreateWithoutProgramsInputSchema),z.lazy(() => PartnerUncheckedCreateWithoutProgramsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PartnerCreateOrConnectWithoutProgramsInputSchema).optional(),
  upsert: z.lazy(() => PartnerUpsertWithoutProgramsInputSchema).optional(),
  connect: z.lazy(() => PartnerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PartnerUpdateToOneWithWhereWithoutProgramsInputSchema),z.lazy(() => PartnerUpdateWithoutProgramsInputSchema),z.lazy(() => PartnerUncheckedUpdateWithoutProgramsInputSchema) ]).optional(),
}).strict();

export default PartnerUpdateOneRequiredWithoutProgramsNestedInputSchema;
