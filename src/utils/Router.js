module.exports = class Router {
  _routes = [];

  getRoutes() {
    return this._routes
  }

  get(url, controller) {
    this._routes.push({
      url,
      method: 'GET',
      controller
    })
  }

  post(url, controller) {
    this._routes.push({
      url,
      method: 'POST',
      controller
    })
  }
}

