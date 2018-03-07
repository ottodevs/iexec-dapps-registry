module.exports = {
  name: 'ETHCCTEST',
  app: {
    type: 'DOCKER',
    envvars: 'XWDOCKERIMAGE=ubuntu',
  },
  work: {
    cmdline: 'echo ethcctest',
  }
};
