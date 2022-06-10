const convertToUnixDateTime = (date) => {
  return new Date(date).getTime();
};

const filterChartByDate = (startDate, endDate, originalChartData) =>{
  const start = convertToUnixDateTime(startDate);
  const end = convertToUnixDateTime(endDate);
  const clonedChartData = structuredClone(originalChartData);
  return clonedChartData.filter((item) => (item.date_ms >= start && item.date_ms <= end));
};

module.exports.filterChartByDate = filterChartByDate;
