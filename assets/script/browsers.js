class _Browser {

    constructor(name, identifier) {
  
      this.name = name;
  
      this.identifier = identifier;
  
    }
  
  
getVersion = function (ua) {

  const { identifier = '' } = this;

  const [versionInfo] = ua.match(new RegExp(`(Version|${identifier})\/[0-9]+(\.?[0-9]*)*`, 'gi')) || [];

  const [_versionInfo] = (versionInfo || '').trim().split(' ');

  const [, version] = (_versionInfo || '').trim().split('/');

  return (version ?? '').trim();

};
  
}
  
const Firefox = new _Browser('Firefox', 'Firefox');

const Opera = new _Browser('Opera', 'OPR');

const MicrosoftEdge = new _Browser('Microsoft Edge', 'Edg');

const Edge = new _Browser('Edge', 'Edge');

const Safari = new _Browser('Safari', 'Safari');

const Chrome = new _Browser('Chrome', 'Chrome');

const browsers = [Firefox, Opera, MicrosoftEdge, Edge, Chrome, Safari];

export { browsers as default, Firefox, Opera, MicrosoftEdge, Edge, Safari, Chrome };
