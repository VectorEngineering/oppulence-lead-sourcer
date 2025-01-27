import { z } from 'zod';

export const ProgramOrderByRelevanceFieldEnumSchema = z.enum(['id','workspaceId','name','slug','logo','wordmark','brandColor','domain','url']);

export default ProgramOrderByRelevanceFieldEnumSchema;
