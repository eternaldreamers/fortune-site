import 'reflect-metadata';

import container from './container'
import iocModule from './module'

const bootstrap = () => {
  const ioc = iocModule()
  container.load(ioc)

  return container;
}

export default bootstrap
