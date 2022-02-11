/**
 * 本文件由 @rlx/umi-plugin-eslint 生成
 * 请不要手动修改!!! 有改动需求请联系 @xiaochao.yang
 */
module.exports = {
  root: true,
  extends: ['react-app', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        arrowParens: 'always',
        trailingComma: 'all',
      },
    ],
    'prefer-template': 'error',
    'no-await-in-loop': 1,
    'import/no-anonymous-default-export': 0,
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'single', 'all', 'multiple'],
      },
    ],
    'react-hooks/exhaustive-deps': 2,
    'no-shadow': ['error'],
  },
};
