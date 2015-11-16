import {IAState1Service} from './aState1.service';

export default (aState1Service: IAState1Service): angular.IDirective => {
  return {
    controllerAs: "vm",
    controller: function() {
      var vm = this;

      vm.newv = '';
      vm.items = aState1Service.getThings();

      vm.addThing = () => {
        if (vm.newv.length !== 0) {
          aState1Service.addThing(vm.newv);
        }
        vm.newv = '';
      };
    },
    restrict: 'E',
    template: require('./aState1.tpl.html'),
    scope: {}
  }
};
