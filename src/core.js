const getFinancialContentUrl = (contentList, accessCounter = 1) => {
  let contentPosition = accessCounter % contentList.length;
  contentPosition = contentPosition <= 0 ? contentList.length : contentPosition;
  const contentUrl = contentList[contentPosition - 1];
  return contentUrl;
};

export { getFinancialContentUrl };
