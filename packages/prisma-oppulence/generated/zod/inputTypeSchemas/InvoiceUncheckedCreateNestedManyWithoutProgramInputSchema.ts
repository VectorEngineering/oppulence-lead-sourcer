import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutProgramInputSchema } from './InvoiceCreateWithoutProgramInputSchema';
import { InvoiceUncheckedCreateWithoutProgramInputSchema } from './InvoiceUncheckedCreateWithoutProgramInputSchema';
import { InvoiceCreateOrConnectWithoutProgramInputSchema } from './InvoiceCreateOrConnectWithoutProgramInputSchema';
import { InvoiceCreateManyProgramInputEnvelopeSchema } from './InvoiceCreateManyProgramInputEnvelopeSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';

export const InvoiceUncheckedCreateNestedManyWithoutProgramInputSchema: z.ZodType<Prisma.InvoiceUncheckedCreateNestedManyWithoutProgramInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutProgramInputSchema),z.lazy(() => InvoiceCreateWithoutProgramInputSchema).array(),z.lazy(() => InvoiceUncheckedCreateWithoutProgramInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceCreateOrConnectWithoutProgramInputSchema),z.lazy(() => InvoiceCreateOrConnectWithoutProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceCreateManyProgramInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default InvoiceUncheckedCreateNestedManyWithoutProgramInputSchema;
