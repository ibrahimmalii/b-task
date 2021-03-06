import Vue from 'vue';
import store from './store';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page.vue';
import NotFoundPageComponent from './pages/not-found-page.vue';
import PerformanceChartComponent from './components/vue-components/chart/performance-chart.vue';
import FilterChartComponent from './components/vue-components/chart/filter-chart.vue';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]);

angular.module('appModule').filter('checkmark', function ($sce) {
  return function (input) {
    return $sce.trustAsHtml(input);
  };
});

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vNotFoundPage', (createVueComponent) => {
  return createVueComponent(Vue.component('notFoundPageComponent', NotFoundPageComponent));
});

angular.module('appModule').directive('vFilterChart', (createVueComponent) => {
  return createVueComponent(Vue.component('FilterChartComponent', FilterChartComponent));
});

angular.module('appModule')
  .config(($ngVueProvider) => {
    $ngVueProvider.setRootVueInstanceProps({
      store,
    });
  });
