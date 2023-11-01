
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "gapi.storyblok.com/v1/api": {
      headers: {
        token: 'm2nlCckFxnPrXV5yxQh3qwtt',
        version: 'draft'
      },
    }
  },

  documents: "./graphql/**/*.ts",
  generates: {
    "src/gql/types": {
      preset: "client",
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    },
  }
};

export default config;
