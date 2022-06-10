import FilterComponent from '../../components/vue-components/Filter.vue';

const app = angular
  .module('appModule')
  .controller('homeController', homePageController);

app.value('FilterComponent', FilterComponent);

function homePageController(Employees, $location) {
  const homePageVm = this;
  homePageVm.originalEmployees = [];
  homePageVm.clonedEmployees = [];
  homePageVm.current_employee_page = 1;
  homePageVm.isAllEmployeesLoaded = false;
  homePageVm.is_loading = false;
  homePageVm.filterInput = '';
  homePageVm.querySelector = '';

  homePageVm.checkIfQuerySelectorExists = function () {
    return ($location.search().filter);
  };

  homePageVm.mapAllEmployeesToMatchAllRegex = function (inputValue) {
    homePageVm.clonedEmployees.map(employee => {
      const regex = new RegExp(inputValue, 'gi');
      employee.profile.name = employee.profile.name.replace(regex, match => `<mark>${match}</mark>`);
      employee.profile.address = employee.profile.address.replace(regex, match => `<mark>${match}</mark>`);
      employee.profile.about = employee.profile.about.replace(regex, match => `<mark>${match}</mark>`);
      return employee;
    });
  };

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.handleEmployeeResponse(data);
      });
  }

  homePageVm.parsedFilter = function (filterInput) {
    return '(' + filterInput.trim().replace(/ +/g, '|') + ')';
  };

  homePageVm.handleFilterUpdate = function (filterInput) {
    homePageVm.clonedEmployees = structuredClone(homePageVm.originalEmployees);
    if (filterInput) {
      homePageVm.filterInput = homePageVm.parsedFilter(filterInput);
      homePageVm.mapAllEmployeesToMatchAllRegex(homePageVm.filterInput);
    } else {
      homePageVm.clonedEmployees = structuredClone(homePageVm.originalEmployees);
    }
  };

  homePageVm.loadMoreEmployees = function () {
    homePageVm.increasePageNumber();
    if (homePageVm.checkIfAllEmployeesLoaded()) {
      homePageVm.isAllEmployeesLoaded = true;
    }

    homePageVm.is_loading = true;
    Employees.loadMoreEmployees(homePageVm.current_employee_page)
      .then(({ data }) => {
        homePageVm.handleEmployeeResponse(data);
      });
  };

  homePageVm.handleEmployeeResponse = function (response) {
    homePageVm.originalEmployees = homePageVm.originalEmployees.concat(response.employees);
    homePageVm.current_employee_page = response.current_page;
    if (homePageVm.checkIfQuerySelectorExists()) {
      homePageVm.querySelector = $location.search().filter;
    }
    homePageVm.handleFilterUpdate(homePageVm.querySelector);
  };

  homePageVm.increasePageNumber = function () {
    homePageVm.current_employee_page += 1;
  };

  homePageVm.checkIfAllEmployeesLoaded = function () {
    return homePageVm.current_employee_page === 7;
  };
}
