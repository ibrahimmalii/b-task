import FilterComponent from '../../components/vue-components/Filter.vue';

const app = angular
  .module('appModule')
  .controller('homeController', homePageController);

app.value('FilterComponent', FilterComponent);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
}
