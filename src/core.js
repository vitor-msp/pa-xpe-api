const getFinancialContentUrl = (contentList, accessCounter = 1) => {
  if (isNaN(accessCounter)) accessCounter = 1;
  accessCounter = Math.abs(accessCounter);

  let contentPosition = accessCounter % contentList.length;
  contentPosition = contentPosition <= 0 ? contentList.length : contentPosition;
  const contentUrl = contentList[contentPosition - 1];
  return contentUrl;
};

export { getFinancialContentUrl };
