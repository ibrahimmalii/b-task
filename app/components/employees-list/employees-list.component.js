angular
  .module('appModule')
  .component('employeesList', {
    templateUrl: 'components/employees-list/employees-list.html',
    controller: EmployeesListComponent,
    controllerAs: 'EmployeesListComponentVm',
    bindings: {
      employeesList: '<',
      filterInput: '<',
    },
  });

function EmployeesListComponent() {
  const EmployeesListComponentVm = this;

  EmployeesListComponentVm.handleFilterUpdate = function (filterInput) {
    const result = EmployeesListComponentVm.parsedFilter(filterInput);
    console.log(result);
  };
}
