
import {getIsomorphicEnhancedResolver} from '@blitzjs/core'
export * from 'app/_resolvers/auth/mutations/forgotPassword'
export default getIsomorphicEnhancedResolver(
  undefined,
  'app/_resolvers/auth/mutations/forgotPassword',
  'forgotPassword',
  'mutation',
  undefined,
  {
    warmApiEndpoints: false
  }
)
