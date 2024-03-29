class FinancialContent {
  constructor(store) {
    this.store = store;
  }

  get(accessCounter = 1) {
    if (isNaN(accessCounter)) accessCounter = 1;
    accessCounter = Math.abs(accessCounter);

    let contentPosition = accessCounter % this.store.contentList.urls.length;
    contentPosition =
      contentPosition <= 0
        ? this.store.contentList.urls.length
        : contentPosition;

    const contentUrl = this.store.contentList.urls[contentPosition - 1];
    return contentUrl;
  }
}

module.exports = { FinancialContent };
