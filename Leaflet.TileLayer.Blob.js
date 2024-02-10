L.TileLayer.Blob = L.TileLayer.extend({
  
  initialize: function (getTileBlobUrlFunction, options) {
    this._getTileBlobUrlFunction = getTileBlobUrlFunction;
    _options = options;
    return L.TileLayer.prototype.initialize.call(this, "", options);
  },

  createTile: function (coords) {
    const tile = document.createElement('img');
    if (this.options.tms) {
      coords.y = this._globalTileRange.max.y - coords.y;
    }
    // const data = this._getTileData(this._base64Tiles, coords.z, coords.x, coords.y);
    // if (data && data.tile_data) {
    //   tile.src = 'data:image/png;base64,' + data.tile_data;
    // } else {
    //   tile.src = L.Util.emptyImageUrl;
    // }

    tile.src = this._getTileBlobUrlFunction(coords);
    // console.log("createTile", coords);
    // console.log(tile.src);

    return tile;
  }
});

L.tileLayer.blob = function (getBlobTileURLFunction, options) {
	return new L.TileLayer.Blob(getBlobTileURLFunction, options);
};