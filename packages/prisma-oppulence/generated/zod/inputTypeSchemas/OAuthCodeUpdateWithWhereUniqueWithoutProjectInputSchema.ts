import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema';
import { OAuthCodeUpdateWithoutProjectInputSchema } from './OAuthCodeUpdateWithoutProjectInputSchema';
import { OAuthCodeUncheckedUpdateWithoutProjectInputSchema } from './OAuthCodeUncheckedUpdateWithoutProjectInputSchema';

export const OAuthCodeUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.OAuthCodeUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => OAuthCodeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OAuthCodeUpdateWithoutProjectInputSchema),z.lazy(() => OAuthCodeUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default OAuthCodeUpdateWithWhereUniqueWithoutProjectInputSchema;
