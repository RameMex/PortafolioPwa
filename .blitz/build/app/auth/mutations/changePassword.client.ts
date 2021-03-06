
import {getIsomorphicEnhancedResolver} from '@blitzjs/core'
export * from 'app/_resolvers/auth/mutations/changePassword'
export default getIsomorphicEnhancedResolver(
  undefined,
  'app/_resolvers/auth/mutations/changePassword',
  'changePassword',
  'mutation',
  undefined,
  {
    warmApiEndpoints: false
  }
)
