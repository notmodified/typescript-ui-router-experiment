/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="./app.d.ts"/>

import 'angular';
import 'angular-ui-router';
import 'angular-messages';

import AState1 from './a-state1/aState1.directive';
import {AState1Service} from './a-state1/aState1.service';

angular.module('app', ['ui.router','ngMessages'])
  .directive('aState1', AState1)
  .factory('aState1Service', AState1Service)
  .config(
    ($stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider) => {

      $urlRouterProvider.otherwise('/state1');

      $stateProvider.state('state1', {
        url: "/state1",
        template: "<a-state1></a-state1>"
      });
  });
