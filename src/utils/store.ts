import { reactive, watchEffect } from 'vue'
import { State } from '@/types/state'

class Store {
  private state: State = {
    activeCatIndex: 0
  }

  private lsKey = 'state'

  constructor () {
    this.state = reactive(this.getStateFromLS() ?? this.state)

    watchEffect(() => {
      this.saveStateToLS(this.state)
    })
  }

  private getStateFromLS <T extends State>(): T|null {
    const stateStr = localStorage.getItem(this.lsKey)
    if (!stateStr) return null
    try {
      return JSON.parse(stateStr) as T
    } catch (err) {
      console.log('Local storage get error')
      return null
    }
  }

  private saveStateToLS = (obj: State) => {
    try {
      const stateStr = JSON.stringify(obj)
      localStorage.setItem(this.lsKey, stateStr)
    } catch (err) {
      console.log('Local storage set error')
    }
  }

  getActiveCatIndex (): number {
    return this.state.activeCatIndex
  }

  setActiveCatIndex (i: number): void {
    this.state.activeCatIndex = i
  }
}

export const store = new Store()
