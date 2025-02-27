import { Animals } from './models/Jumble.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  animal = [
    new Animals({
      name: 'Joeseph',
      emoji: '🐔',
      content: 'placeholder text make it better later'
    }),
    new Animals({
      name: 'Michael',
      emoji: '🐒',
      content: 'placeholder text make it better later'
    }),
    new Animals({
      name: 'richard',
      emoji: '🐕',
      content: 'placeholder text make it better later'
    })
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())