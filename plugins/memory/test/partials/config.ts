import { Config } from '@verdaccio/types';

const config: Config = {
  user_agent: 'string',
  server_id: 1234,
  secret: '12345',
  self_path: './nowhere',
  uplinks: {
    npmjs: {
      url: 'https://registry.npmjs.org/',
    },
  },
  security: {
    web: {
      sign: {},
      verify: {},
    },
    api: {
      legacy: true,
    },
  },
  packages: {
    test: {
      storage: '',
      publish: [''],
      proxy: [''],
      access: [''],
    },
  },
  web: {
    enable: true,
    title: 'string',
    logo: 'string',
  },
  logs: [],
  auth: {},
  notifications: {
    method: '',
    packagePattern: /a/,
    packagePatternFlags: '',
    headers: {},
    endpoint: '',
    content: '',
  },
  checkSecretKey: token => '1234',
  getMatchedPackagesSpec: () => {},
  hasProxyTo: (pkg, upLink) => false,
};

export default config;
