import { z } from 'zod';

export const WorkspaceInvitationScalarFieldEnumSchema = z.enum(['id','workspaceId','email','token','status','expiresAt','createdAt','updatedAt']);

export default WorkspaceInvitationScalarFieldEnumSchema;
