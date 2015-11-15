import {IAState1Service} from './aState1.service';

declare function require(file: string) : string;

export default (aState1Service: IAState1Service): angular.IDirective => {
  return {
    controllerAs: "vm",
    controller: function() {
      var vm = this;
      vm.items = aState1Service.getThings();
    },
    restrict: 'E',
    template: require('./aState1.tpl.html'),
    scope: {}
  }
};
