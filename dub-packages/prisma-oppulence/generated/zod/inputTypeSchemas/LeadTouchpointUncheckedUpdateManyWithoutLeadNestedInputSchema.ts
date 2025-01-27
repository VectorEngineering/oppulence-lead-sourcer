import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTouchpointCreateWithoutLeadInputSchema } from './LeadTouchpointCreateWithoutLeadInputSchema';
import { LeadTouchpointUncheckedCreateWithoutLeadInputSchema } from './LeadTouchpointUncheckedCreateWithoutLeadInputSchema';
import { LeadTouchpointCreateOrConnectWithoutLeadInputSchema } from './LeadTouchpointCreateOrConnectWithoutLeadInputSchema';
import { LeadTouchpointUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadTouchpointUpsertWithWhereUniqueWithoutLeadInputSchema';
import { LeadTouchpointCreateManyLeadInputEnvelopeSchema } from './LeadTouchpointCreateManyLeadInputEnvelopeSchema';
import { LeadTouchpointWhereUniqueInputSchema } from './LeadTouchpointWhereUniqueInputSchema';
import { LeadTouchpointUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadTouchpointUpdateWithWhereUniqueWithoutLeadInputSchema';
import { LeadTouchpointUpdateManyWithWhereWithoutLeadInputSchema } from './LeadTouchpointUpdateManyWithWhereWithoutLeadInputSchema';
import { LeadTouchpointScalarWhereInputSchema } from './LeadTouchpointScalarWhereInputSchema';

export const LeadTouchpointUncheckedUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadTouchpointUncheckedUpdateManyWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadTouchpointCreateWithoutLeadInputSchema),z.lazy(() => LeadTouchpointCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadTouchpointUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadTouchpointUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadTouchpointCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadTouchpointCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadTouchpointUpsertWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadTouchpointUpsertWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadTouchpointCreateManyLeadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadTouchpointWhereUniqueInputSchema),z.lazy(() => LeadTouchpointWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadTouchpointWhereUniqueInputSchema),z.lazy(() => LeadTouchpointWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadTouchpointWhereUniqueInputSchema),z.lazy(() => LeadTouchpointWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadTouchpointWhereUniqueInputSchema),z.lazy(() => LeadTouchpointWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadTouchpointUpdateWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadTouchpointUpdateWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadTouchpointUpdateManyWithWhereWithoutLeadInputSchema),z.lazy(() => LeadTouchpointUpdateManyWithWhereWithoutLeadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadTouchpointScalarWhereInputSchema),z.lazy(() => LeadTouchpointScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadTouchpointUncheckedUpdateManyWithoutLeadNestedInputSchema;
