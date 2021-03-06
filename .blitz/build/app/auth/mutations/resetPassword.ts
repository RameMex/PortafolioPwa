
import {getIsomorphicEnhancedResolver} from '@blitzjs/core'
import * as resolverModule from 'app/_resolvers/auth/mutations/resetPassword'
export * from 'app/_resolvers/auth/mutations/resetPassword'
export default getIsomorphicEnhancedResolver(
  resolverModule,
  'app/_resolvers/auth/mutations/resetPassword',
  'resetPassword',
  'mutation',
  undefined,
  {
    warmApiEndpoints: false
  }
)
