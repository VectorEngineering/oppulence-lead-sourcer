import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceAttachmentCreateWithoutInvoiceInputSchema } from './InvoiceAttachmentCreateWithoutInvoiceInputSchema';
import { InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema';
import { InvoiceAttachmentCreateOrConnectWithoutInvoiceInputSchema } from './InvoiceAttachmentCreateOrConnectWithoutInvoiceInputSchema';
import { InvoiceAttachmentCreateManyInvoiceInputEnvelopeSchema } from './InvoiceAttachmentCreateManyInvoiceInputEnvelopeSchema';
import { InvoiceAttachmentWhereUniqueInputSchema } from './InvoiceAttachmentWhereUniqueInputSchema';

export const InvoiceAttachmentCreateNestedManyWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceAttachmentCreateNestedManyWithoutInvoiceInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceAttachmentCreateWithoutInvoiceInputSchema),z.lazy(() => InvoiceAttachmentCreateWithoutInvoiceInputSchema).array(),z.lazy(() => InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema),z.lazy(() => InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceAttachmentCreateOrConnectWithoutInvoiceInputSchema),z.lazy(() => InvoiceAttachmentCreateOrConnectWithoutInvoiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceAttachmentCreateManyInvoiceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema),z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default InvoiceAttachmentCreateNestedManyWithoutInvoiceInputSchema;
