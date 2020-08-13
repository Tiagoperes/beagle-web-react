/*
  * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *  http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

import createBeagleCoreUIService, { DefaultSchema, ErrorComponentParams } from '@zup-it/beagle-web'
import BeagleRemoteView from './component'
import { BeagleProvider } from './provider'
import { BeagleConfig, BeagleUIService, BeagleComponent } from './types'
import defaultComponents from './components'

function createBeagleUIService<Schema = DefaultSchema>(config: BeagleConfig<Schema>) {
  return createBeagleCoreUIService<Schema>({
    ...config,
    components: {
      ...defaultComponents,
      ...config.components,
    },
  })
}

export {
  createBeagleUIService,
  BeagleRemoteView,
  BeagleProvider,
  BeagleConfig,
  BeagleUIService,
  BeagleComponent,
  ErrorComponentParams,
}