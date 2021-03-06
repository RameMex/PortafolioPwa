
import {getIsomorphicEnhancedResolver} from '@blitzjs/core'
import * as resolverModule from 'app/_resolvers/auth/mutations/forgotPassword'
export * from 'app/_resolvers/auth/mutations/forgotPassword'
export default getIsomorphicEnhancedResolver(
  resolverModule,
  'app/_resolvers/auth/mutations/forgotPassword',
  'forgotPassword',
  'mutation',
  undefined,
  {
    warmApiEndpoints: false
  }
)
