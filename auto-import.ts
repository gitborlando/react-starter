import autoImportPlugin from 'unplugin-auto-import/vite'

export const autoImportConfig = autoImportPlugin({
  imports: [
    'react',
    'react-router',
    'mobx',
    'mobx-react-lite',
    {
      'auto-bind': [['default', 'autoBind']],
      '@linaria/core': ['css', 'cx'],
      'src/assets/assets': ['Assets'],
      'src/styles/styles': ['styles'],
      'src/styles/classes': ['classes'],
    },
    {
      from: 'react',
      imports: ['FC', 'ReactNode', 'ComponentPropsWithRef', 'CSSProperties'],
      type: true,
    },
  ],
})
