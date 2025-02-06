import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportAccessCreateWithoutUserInputSchema } from './ReportAccessCreateWithoutUserInputSchema';
import { ReportAccessUncheckedCreateWithoutUserInputSchema } from './ReportAccessUncheckedCreateWithoutUserInputSchema';
import { ReportAccessCreateOrConnectWithoutUserInputSchema } from './ReportAccessCreateOrConnectWithoutUserInputSchema';
import { ReportAccessCreateManyUserInputEnvelopeSchema } from './ReportAccessCreateManyUserInputEnvelopeSchema';
import { ReportAccessWhereUniqueInputSchema } from './ReportAccessWhereUniqueInputSchema';

export const ReportAccessUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ReportAccessUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ReportAccessCreateWithoutUserInputSchema),z.lazy(() => ReportAccessCreateWithoutUserInputSchema).array(),z.lazy(() => ReportAccessUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReportAccessUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReportAccessCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReportAccessCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReportAccessCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReportAccessWhereUniqueInputSchema),z.lazy(() => ReportAccessWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReportAccessUncheckedCreateNestedManyWithoutUserInputSchema;
