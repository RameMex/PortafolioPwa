
import {getIsomorphicEnhancedResolver} from '@blitzjs/core'
import * as resolverModule from 'app/_resolvers/auth/mutations/changePassword'
export * from 'app/_resolvers/auth/mutations/changePassword'
export default getIsomorphicEnhancedResolver(
  resolverModule,
  'app/_resolvers/auth/mutations/changePassword',
  'changePassword',
  'mutation',
  undefined,
  {
    warmApiEndpoints: false
  }
)
