import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleCreateWithoutPartnerInputSchema } from './SaleCreateWithoutPartnerInputSchema';
import { SaleUncheckedCreateWithoutPartnerInputSchema } from './SaleUncheckedCreateWithoutPartnerInputSchema';
import { SaleCreateOrConnectWithoutPartnerInputSchema } from './SaleCreateOrConnectWithoutPartnerInputSchema';
import { SaleCreateManyPartnerInputEnvelopeSchema } from './SaleCreateManyPartnerInputEnvelopeSchema';
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema';

export const SaleUncheckedCreateNestedManyWithoutPartnerInputSchema: z.ZodType<Prisma.SaleUncheckedCreateNestedManyWithoutPartnerInput> = z.object({
  create: z.union([ z.lazy(() => SaleCreateWithoutPartnerInputSchema),z.lazy(() => SaleCreateWithoutPartnerInputSchema).array(),z.lazy(() => SaleUncheckedCreateWithoutPartnerInputSchema),z.lazy(() => SaleUncheckedCreateWithoutPartnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SaleCreateOrConnectWithoutPartnerInputSchema),z.lazy(() => SaleCreateOrConnectWithoutPartnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SaleCreateManyPartnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SaleWhereUniqueInputSchema),z.lazy(() => SaleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SaleUncheckedCreateNestedManyWithoutPartnerInputSchema;
