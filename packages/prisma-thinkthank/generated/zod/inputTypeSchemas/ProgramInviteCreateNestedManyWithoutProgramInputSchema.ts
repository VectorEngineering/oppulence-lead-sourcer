import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramInviteCreateWithoutProgramInputSchema } from './ProgramInviteCreateWithoutProgramInputSchema';
import { ProgramInviteUncheckedCreateWithoutProgramInputSchema } from './ProgramInviteUncheckedCreateWithoutProgramInputSchema';
import { ProgramInviteCreateOrConnectWithoutProgramInputSchema } from './ProgramInviteCreateOrConnectWithoutProgramInputSchema';
import { ProgramInviteCreateManyProgramInputEnvelopeSchema } from './ProgramInviteCreateManyProgramInputEnvelopeSchema';
import { ProgramInviteWhereUniqueInputSchema } from './ProgramInviteWhereUniqueInputSchema';

export const ProgramInviteCreateNestedManyWithoutProgramInputSchema: z.ZodType<Prisma.ProgramInviteCreateNestedManyWithoutProgramInput> = z.object({
  create: z.union([ z.lazy(() => ProgramInviteCreateWithoutProgramInputSchema),z.lazy(() => ProgramInviteCreateWithoutProgramInputSchema).array(),z.lazy(() => ProgramInviteUncheckedCreateWithoutProgramInputSchema),z.lazy(() => ProgramInviteUncheckedCreateWithoutProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProgramInviteCreateOrConnectWithoutProgramInputSchema),z.lazy(() => ProgramInviteCreateOrConnectWithoutProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProgramInviteCreateManyProgramInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProgramInviteWhereUniqueInputSchema),z.lazy(() => ProgramInviteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProgramInviteCreateNestedManyWithoutProgramInputSchema;
