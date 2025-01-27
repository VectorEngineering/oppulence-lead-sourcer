import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCommunicationCreateWithoutLeadInputSchema } from './LeadCommunicationCreateWithoutLeadInputSchema';
import { LeadCommunicationUncheckedCreateWithoutLeadInputSchema } from './LeadCommunicationUncheckedCreateWithoutLeadInputSchema';
import { LeadCommunicationCreateOrConnectWithoutLeadInputSchema } from './LeadCommunicationCreateOrConnectWithoutLeadInputSchema';
import { LeadCommunicationUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadCommunicationUpsertWithWhereUniqueWithoutLeadInputSchema';
import { LeadCommunicationCreateManyLeadInputEnvelopeSchema } from './LeadCommunicationCreateManyLeadInputEnvelopeSchema';
import { LeadCommunicationWhereUniqueInputSchema } from './LeadCommunicationWhereUniqueInputSchema';
import { LeadCommunicationUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadCommunicationUpdateWithWhereUniqueWithoutLeadInputSchema';
import { LeadCommunicationUpdateManyWithWhereWithoutLeadInputSchema } from './LeadCommunicationUpdateManyWithWhereWithoutLeadInputSchema';
import { LeadCommunicationScalarWhereInputSchema } from './LeadCommunicationScalarWhereInputSchema';

export const LeadCommunicationUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadCommunicationUpdateManyWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCommunicationCreateWithoutLeadInputSchema),z.lazy(() => LeadCommunicationCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadCommunicationUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadCommunicationUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadCommunicationCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadCommunicationCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadCommunicationUpsertWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadCommunicationUpsertWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadCommunicationCreateManyLeadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadCommunicationWhereUniqueInputSchema),z.lazy(() => LeadCommunicationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadCommunicationWhereUniqueInputSchema),z.lazy(() => LeadCommunicationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadCommunicationWhereUniqueInputSchema),z.lazy(() => LeadCommunicationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadCommunicationWhereUniqueInputSchema),z.lazy(() => LeadCommunicationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadCommunicationUpdateWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadCommunicationUpdateWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadCommunicationUpdateManyWithWhereWithoutLeadInputSchema),z.lazy(() => LeadCommunicationUpdateManyWithWhereWithoutLeadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadCommunicationScalarWhereInputSchema),z.lazy(() => LeadCommunicationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadCommunicationUpdateManyWithoutLeadNestedInputSchema;
