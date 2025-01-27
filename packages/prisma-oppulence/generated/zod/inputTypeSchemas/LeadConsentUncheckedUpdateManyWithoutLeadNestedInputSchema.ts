import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadConsentCreateWithoutLeadInputSchema } from './LeadConsentCreateWithoutLeadInputSchema';
import { LeadConsentUncheckedCreateWithoutLeadInputSchema } from './LeadConsentUncheckedCreateWithoutLeadInputSchema';
import { LeadConsentCreateOrConnectWithoutLeadInputSchema } from './LeadConsentCreateOrConnectWithoutLeadInputSchema';
import { LeadConsentUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadConsentUpsertWithWhereUniqueWithoutLeadInputSchema';
import { LeadConsentCreateManyLeadInputEnvelopeSchema } from './LeadConsentCreateManyLeadInputEnvelopeSchema';
import { LeadConsentWhereUniqueInputSchema } from './LeadConsentWhereUniqueInputSchema';
import { LeadConsentUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadConsentUpdateWithWhereUniqueWithoutLeadInputSchema';
import { LeadConsentUpdateManyWithWhereWithoutLeadInputSchema } from './LeadConsentUpdateManyWithWhereWithoutLeadInputSchema';
import { LeadConsentScalarWhereInputSchema } from './LeadConsentScalarWhereInputSchema';

export const LeadConsentUncheckedUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadConsentUncheckedUpdateManyWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadConsentCreateWithoutLeadInputSchema),z.lazy(() => LeadConsentCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadConsentUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadConsentUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadConsentCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadConsentCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadConsentUpsertWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadConsentUpsertWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadConsentCreateManyLeadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadConsentWhereUniqueInputSchema),z.lazy(() => LeadConsentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadConsentWhereUniqueInputSchema),z.lazy(() => LeadConsentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadConsentWhereUniqueInputSchema),z.lazy(() => LeadConsentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadConsentWhereUniqueInputSchema),z.lazy(() => LeadConsentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadConsentUpdateWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadConsentUpdateWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadConsentUpdateManyWithWhereWithoutLeadInputSchema),z.lazy(() => LeadConsentUpdateManyWithWhereWithoutLeadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadConsentScalarWhereInputSchema),z.lazy(() => LeadConsentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadConsentUncheckedUpdateManyWithoutLeadNestedInputSchema;
