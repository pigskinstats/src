class Paginator {
  constructor(collection) {
    this._collection = collection;
    this._limit = 50;
    this.gotoPage(1);
  }

  get pages() {
    return Math.ceil(this._collection.length / this._limit);
  }

  forward() {
    this.gotoPage(this.page + 1);
  }

  back() {
    this.gotoPage(this.page - 1);
  }

  gotoPage(page) {
    if(page < 1 || page > this.pages) {
      return;
    }
    this.page = page;
    const start = this._limit * (this.page - 1);
    const end = start + this._limit;
    this.items = this._collection.slice(start, end);
  }
}

export { Paginator };
