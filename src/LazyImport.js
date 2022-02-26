import { lazy } from 'react'

const lazyImport = (
  filename,
) => (
  lazy(() => (
     import(`${filename}`)
  ))
)

export default lazyImport