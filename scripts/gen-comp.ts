import { generateComponent } from '@gitborlando/utils/script'

const tsxTemplate = (name: string) => `import { FC } from 'react'
import './index.less'

interface ${name}Props {}

export const ${name}: FC<${name}Props> = observer(() => {
  return (
    <Flex layout='c' className='${name.toLowerCase()}'></Flex>
  )
})`

const lessTemplate = (name: string) => `.${name.toLowerCase()} {
  
}`

generateComponent({
  dir: 'src/components',
  tsxTemplate,
  lessTemplate,
})
