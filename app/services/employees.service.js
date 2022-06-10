angular.module('appModule').service('Employees', EmployeesService);

function EmployeesService($http) {
  const getEmployees = () => {
    const employeesUrl = 'https://fe-task.getsandbox.com/employees';

    return $http.get(employeesUrl);
  };

  const loadMoreEmployees = (pageNumber) => {
    const employeesUrl = `https://fe-task.getsandbox.com/employees?page=${pageNumber}`;

    return $http.get(employeesUrl);
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}
