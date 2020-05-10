module.exports = {
  name: 'toolbox',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/toolbox',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
