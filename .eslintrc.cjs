/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // ✅ Prettier 설정 추가
  ],
  plugins: ['prettier'],
  parser: 'vue-eslint-parser', // vie 파일 파싱
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': ['error'],
  },
};
