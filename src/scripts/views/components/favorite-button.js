import FavoriteRestoIDB from '../../data/favorite-resto';

class FavoriteButton extends HTMLElement {
  connectedCallback() {
    this._renderLoading();
  }

  set data(data) {
    this._data = data;
    this._renderButton();
  }

  get data() {
    return this._data;
  }

  _renderLoading() {
    this.innerHTML = `
    <button aria-label="Loading" id="likeButton" class="like loading">
        Loading
    </button>
    `;
  }

  async _renderButton() {
    const { id } = this.data;
    if (await this._isRestoExist(id)) {
      this._renderUnlikeButton();
    } else {
      this._renderLikeButton();
    }
  }

  _renderLikeButton() {
    this.innerHTML = `
      <button aria-label="Add Resto to Favorites" id="likeButton" class="like">
          <i class="material-icons">bookmark_add</i> Add to Favorites
      </button>
    `;

    this._addLikeButtonListener();
  }

  _renderUnlikeButton() {
    this.innerHTML = `
      <button aria-label="Remove resto from Favorites" id="likeButton" class="like">
          <i class="material-icons">bookmark_added</i> Remove from Favorites
      </button>
    `;

    this._addUnlikeButtonListener();
  }

  _addLikeButtonListener() {
    const likeButton = this.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIDB.putResto(this.data);
      this._renderButton();
    });
  }

  _addUnlikeButtonListener() {
    const likeButton = this.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIDB.deleteResto(this.data.id);
      this._renderButton();
    });
  }

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIDB.getResto(id);
    return !!resto;
  }
}

customElements.define('favorite-button', FavoriteButton);
