import { IsLoggedInGuard } from './is-logged-in.guard';
import { IsLoggedOutGuard } from './is-logged-out.guard';
import { IsUnderConstructionGuard } from './is-under-construction.guard';
import { IsDevOnlyGuard } from './is-dev-only.guard';
import { HasAccessRoleGuard } from './has-access-role.guard';

export const guards: any[] = [
  IsLoggedInGuard,
  IsLoggedOutGuard,
  IsUnderConstructionGuard,
  IsDevOnlyGuard,
  HasAccessRoleGuard
];

export * from './is-logged-in.guard';
export * from './is-logged-out.guard';
export * from './is-under-construction.guard';
export * from './is-dev-only.guard';
export * from './has-access-role.guard';

