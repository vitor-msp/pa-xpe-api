class Controller {
  constructor(financialContent, store) {
    this.financialContent = financialContent;
    this.store = store;
  }

  getBlacklist(_req, res) {
    try {
      return res.json(this.store.blacklist);
    } catch (error) {
      console.error(error);
      return res.status(400).end();
    }
  }

  getFinancialContent(req, res) {
    try {
      console.log("domain", req.query.domain);
      const contentUrl = this.financialContent.get(req.query.counter);
      return res.redirect(contentUrl);
    } catch (error) {
      console.error(error);
      return res.status(400).end();
    }
  }
}

export { Controller };
