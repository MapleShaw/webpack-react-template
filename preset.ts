module.exports = [
  {
    name: 'name',
    message: 'Please enter project name:',
  },
  {
    name: 'description',
    message: 'Please enter project description:',
  },
  {
    name: 'author',
    message: 'Please enter project author:',
  },
  {
    name: 'apiPrefix',
    message: 'Please enter project apiPrefix:',
    default: 'api/1.0',
    // @ts-ignore
    validate: function (input) {
      const done = this.async();
      setTimeout(function () {
        // 校验是否为空，是否是字符串
        if (!input.trim()) {
          done(
            'You can provide a apiPrefix, or not it will be default【api/1.0】',
          );
          return;
        }
        const pattern = /[a-zA-Z0-9]$/;
        if (!pattern.test(input.trim())) {
          done(
            'The apiPrefix is must end with letter or number, like default 【api/1.0】',
          );
          return;
        }
        done(null, true);
      }, 300);
    },
  },
  {
    name: 'proxy',
    message: 'Please enter project proxy:',
    default: 'https://www.vspace.com',
    // @ts-ignore
    validate: function (input) {
      const done = this.async();
      setTimeout(function () {
        // 校验是否为空，是否是字符串
        if (!input.trim()) {
          done(
            'You can provide a proxy, or not it will be default【https://www.vspace.com】',
          );
          return;
        }
        const pattern =
          /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/;
        if (!pattern.test(input.trim())) {
          done(
            'The proxy is must end with letter or number, like default 【https://www.vspace.com】',
          );
          return;
        }
        done(null, true);
      }, 300);
    },
  },
];