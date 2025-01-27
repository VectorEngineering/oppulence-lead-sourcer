import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema';
import { OAuthCodeUpdateWithoutUserInputSchema } from './OAuthCodeUpdateWithoutUserInputSchema';
import { OAuthCodeUncheckedUpdateWithoutUserInputSchema } from './OAuthCodeUncheckedUpdateWithoutUserInputSchema';

export const OAuthCodeUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.OAuthCodeUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => OAuthCodeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OAuthCodeUpdateWithoutUserInputSchema),z.lazy(() => OAuthCodeUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default OAuthCodeUpdateWithWhereUniqueWithoutUserInputSchema;
