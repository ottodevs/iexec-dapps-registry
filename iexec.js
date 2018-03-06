module.exports = {
  name: 'TTADEMO',
  app: {
    type: 'DOCKER',
    envvars: 'XWDOCKERIMAGE=ubuntu',
  },
  work: {
    cmdline: 'echo helloEthcc',
  }
};
