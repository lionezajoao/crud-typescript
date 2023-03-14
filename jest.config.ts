export default {
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': ['ts-jest', {}]
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json'
      }
    },
    verbose: true
  };
  