import { reactive, watchEffect } from 'vue'
import type { State } from '@/types/state'
import type { Product } from '@/types/common'

class Store {
  private state: State = {
    activeCatIndex: 0,
    itemsInBasket: [],
    activeProduct: null
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

  private saveStateToLS (obj: State) {
    try {
      const stateStr = JSON.stringify(obj)
      localStorage.setItem(this.lsKey, stateStr)
    } catch (err) {
      console.log('Local storage set error')
    }
  }

  getItemsInBasket () {
    return this.state.itemsInBasket
  }

  addToBasket (id: number) {
    const item = this.state.itemsInBasket
      .find((entry) => entry.id === id)
      ||
      { id, quantity: 0 }

    item.quantity += 1

    if (item.quantity === 1) {
      this.state.itemsInBasket.push(item)
    }
  }

  removeFromBasket (id: number) {
    const item = this.state.itemsInBasket.find((entry) => entry.id === id)
    if (!item) return
    item.quantity -= 1
    if (item.quantity === 0) {
      this.removeAllQuantityFromBasket(id)
    }
  }

  removeAllQuantityFromBasket (id: number) {
    this.state.itemsInBasket = this.state.itemsInBasket.filter((item) => item.id !== id)
  }

  emptyBasket () {
     for (const item of this.state.itemsInBasket) {
       this.removeAllQuantityFromBasket(item.id)
     }
  }

  getActiveCatIndex (): number {
    return this.state.activeCatIndex
  }

  setActiveCatIndex (i: number): void {
    this.state.activeCatIndex = i
  }

  getActiveProduct (): Product | null {
    return this.state.activeProduct
  }

  setActiveProduct (product: Product | undefined): void {
    if (!product) return
    this.state.activeProduct = product
  }
}

export const store = new Store()
