import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutRisksInputSchema } from './LeadCreateWithoutRisksInputSchema';
import { LeadUncheckedCreateWithoutRisksInputSchema } from './LeadUncheckedCreateWithoutRisksInputSchema';
import { LeadCreateOrConnectWithoutRisksInputSchema } from './LeadCreateOrConnectWithoutRisksInputSchema';
import { LeadUpsertWithoutRisksInputSchema } from './LeadUpsertWithoutRisksInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutRisksInputSchema } from './LeadUpdateToOneWithWhereWithoutRisksInputSchema';
import { LeadUpdateWithoutRisksInputSchema } from './LeadUpdateWithoutRisksInputSchema';
import { LeadUncheckedUpdateWithoutRisksInputSchema } from './LeadUncheckedUpdateWithoutRisksInputSchema';

export const LeadUpdateOneRequiredWithoutRisksNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutRisksNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutRisksInputSchema),z.lazy(() => LeadUncheckedCreateWithoutRisksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutRisksInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutRisksInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutRisksInputSchema),z.lazy(() => LeadUpdateWithoutRisksInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutRisksInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutRisksNestedInputSchema;
