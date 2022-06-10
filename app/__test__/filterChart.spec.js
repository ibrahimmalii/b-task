const { filterChartByDate } = require('../utils/filterChart');
const chartData = require('./api.json');

let originalChartData;
describe('filterChartByDate()', () => {
  beforeEach(() => {
    originalChartData = chartData;
  });

  it('should return an array of objects with date_ms between startDate and endDate', () => {
    const startDate = '2021-01-01';
    const endDate = '2022-05-02';
    const filteredChartData = filterChartByDate(startDate, endDate, originalChartData);

    expect(filteredChartData).toEqual(chartData);
  });

  it('should return an empty array if startDate is after endDate', () => {
    const startDate = '2022-05-02';
    const endDate = '2021-01-01';
    const expectedChartData = [];

    const filteredChartData = filterChartByDate(startDate, endDate, originalChartData);

    expect(filteredChartData).toEqual(expectedChartData);
  });

  it('should return an at least one object if startDate is the same as endDate and both are in the original data', () => {
    const startDate = '2022-01-11';
    const endDate = '2022-01-11';
    const expectedChartData = [
      {
        date_ms: 1641859200000,
        performance: 0.33,
      },
    ];

    const filteredChartData = filterChartByDate(startDate, endDate, originalChartData);

    expect(filteredChartData).toEqual(expectedChartData);
  });

  it('should return an empty array if startDate is the same as endDate and both are not in the original data', () => {
    const startDate = '2000-01-11';
    const endDate = '2000-01-11';
    const expectedChartData = [];

    const filteredChartData = filterChartByDate(startDate, endDate, originalChartData);

    expect(filteredChartData).toEqual(expectedChartData);
  });
});
