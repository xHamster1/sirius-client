import { makeAutoObservable } from "mobx";

export default class RoomSite {
  constructor() {
    this._types = []
    this._address = []
    this._rooms = []
    this._selectedType = {}
    this._selectedAddress = {}
    this._page = 1
    this._totalCount = 0
    this._limit = 9
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setSelectedTypes(types) {
    this.setPage(1)
    this._selectedType = types
  }

  setAddress(address) {
    this._address = address;
  }
  setSelectedAddress(address) {
    this.setPage(1)
    this._selectedAddress = address
  }

  setPage(page) {
    this._page = page
  }

  setTotalCount(count) {
    this._totalCount = count
  }

  
  setRooms(rooms) {
    this._rooms = rooms;
  }

  get types() {
    return this._types;
  }
  get selectedType() {
    return this._selectedType
  }

  get address() {
    return this._address;
  }
  get selectedAddress() {
    return this._selectedAddress
  }

  get rooms() {
    return this._rooms;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }
}
