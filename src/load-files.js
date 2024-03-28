class LoadFiles {
  constructor(blacklistUrl, financialContentListUrl, store) {
    this.blacklistUrl = blacklistUrl;
    this.financialContentListUrl = financialContentListUrl;
    this.store = store;
  }

  async execute() {
    let response = await fetch(this.blacklistUrl);
    this.store.blacklist = await response.json();

    response = await fetch(this.financialContentListUrl);
    this.store.contentList = await response.json();
  }
}

export { LoadFiles };
