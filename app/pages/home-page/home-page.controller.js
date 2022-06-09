import FilterComponent from '../../components/vue-components/Filter.vue';

const app = angular
  .module('appModule')
  .controller('homeController', homePageController);

app.value('FilterComponent', FilterComponent);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.originalEmployees = [];
  homePageVm.clonedEmployees = [];
  homePageVm.filterInput = '';

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.originalEmployees = homePageVm.originalEmployees.concat(data.employees);
        homePageVm.clonedEmployees = structuredClone(homePageVm.originalEmployees);
      });
  }

  homePageVm.parsedFilter = function (filterInput) {
    return '(' + filterInput.trim().replace(/ +/g, '|') + ')';
  };

  homePageVm.handleFilterUpdate = function (filterInput) {
    homePageVm.filterInput = homePageVm.parsedFilter(filterInput);
    homePageVm.clonedEmployees.map(employee => {
      const regex = new RegExp(homePageVm.filterInput, 'gi');
      employee.profile.name.replace(regex, match => `<mark>${match}</mark>`);
      employee.profile.address.replace(regex, match => `<mark>${match}</mark>`);
      employee.profile.about.replace(regex, match => `<mark>${match}</mark>`);
      return employee;
    });
  };
}
