class LoadFiles {
  constructor(blacklistUrl, financialContentListUrl, store) {
    this.blacklistUrl = blacklistUrl;
    this.financialContentListUrl = financialContentListUrl;
    this.store = store;
  }

  async execute() {
    await Promise.all([
      this.fetchBlacklist(),
      this.fetchFinancialContentList(),
    ]);
  }

  async fetchBlacklist() {
    const response = await fetch(this.blacklistUrl);
    this.store.blacklist = await response.json();
  }

  async fetchFinancialContentList() {
    const response = await fetch(this.financialContentListUrl);
    this.store.contentList = await response.json();
  }
}

module.exports = { LoadFiles };
