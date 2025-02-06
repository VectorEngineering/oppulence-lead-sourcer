import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleCreateWithoutProgramInputSchema } from './SaleCreateWithoutProgramInputSchema';
import { SaleUncheckedCreateWithoutProgramInputSchema } from './SaleUncheckedCreateWithoutProgramInputSchema';
import { SaleCreateOrConnectWithoutProgramInputSchema } from './SaleCreateOrConnectWithoutProgramInputSchema';
import { SaleCreateManyProgramInputEnvelopeSchema } from './SaleCreateManyProgramInputEnvelopeSchema';
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema';

export const SaleCreateNestedManyWithoutProgramInputSchema: z.ZodType<Prisma.SaleCreateNestedManyWithoutProgramInput> = z.object({
  create: z.union([ z.lazy(() => SaleCreateWithoutProgramInputSchema),z.lazy(() => SaleCreateWithoutProgramInputSchema).array(),z.lazy(() => SaleUncheckedCreateWithoutProgramInputSchema),z.lazy(() => SaleUncheckedCreateWithoutProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SaleCreateOrConnectWithoutProgramInputSchema),z.lazy(() => SaleCreateOrConnectWithoutProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SaleCreateManyProgramInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SaleWhereUniqueInputSchema),z.lazy(() => SaleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SaleCreateNestedManyWithoutProgramInputSchema;
