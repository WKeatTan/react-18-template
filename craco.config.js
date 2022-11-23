const path = require(`path`);
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  webpack: {
    alias: {
      Actions: resolveApp('src/actions/'),
      Api: resolveApp('src/api/'),
      Assets: resolveApp('src/assets/'),
      Components: resolveApp('src/components/'),
      Constants: resolveApp('src/constants/'),
      Container: resolveApp('src/container/'),
      Contexts: resolveApp('src/contexts/'),
      Hooks: resolveApp('src/hooks/'),
      Lang: resolveApp('src/lang'),
      Lib: resolveApp('src/lib'),
      Reducers: resolveApp('src/reducers'),
      Routes: resolveApp('src/routes/'),
      Services: resolveApp('src/services/'),
      Store: resolveApp('src/store/'),
      Utils: resolveApp('src/utils/'),
    },
  },
};
