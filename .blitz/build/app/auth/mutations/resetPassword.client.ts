
import {getIsomorphicEnhancedResolver} from '@blitzjs/core'
export * from 'app/_resolvers/auth/mutations/resetPassword'
export default getIsomorphicEnhancedResolver(
  undefined,
  'app/_resolvers/auth/mutations/resetPassword',
  'resetPassword',
  'mutation',
  undefined,
  {
    warmApiEndpoints: false
  }
)
