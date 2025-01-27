import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleCreateWithoutCustomerInputSchema } from './SaleCreateWithoutCustomerInputSchema';
import { SaleUncheckedCreateWithoutCustomerInputSchema } from './SaleUncheckedCreateWithoutCustomerInputSchema';
import { SaleCreateOrConnectWithoutCustomerInputSchema } from './SaleCreateOrConnectWithoutCustomerInputSchema';
import { SaleCreateManyCustomerInputEnvelopeSchema } from './SaleCreateManyCustomerInputEnvelopeSchema';
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema';

export const SaleCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.SaleCreateNestedManyWithoutCustomerInput> = z.object({
  create: z.union([ z.lazy(() => SaleCreateWithoutCustomerInputSchema),z.lazy(() => SaleCreateWithoutCustomerInputSchema).array(),z.lazy(() => SaleUncheckedCreateWithoutCustomerInputSchema),z.lazy(() => SaleUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SaleCreateOrConnectWithoutCustomerInputSchema),z.lazy(() => SaleCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SaleCreateManyCustomerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SaleWhereUniqueInputSchema),z.lazy(() => SaleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SaleCreateNestedManyWithoutCustomerInputSchema;
