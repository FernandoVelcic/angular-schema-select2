'use strict';

angular.module('schemaForm').config(['schemaFormDecoratorsProvider', function (schemaFormDecoratorsProvider) {
  schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'select2', 'directives/decorators/select2/select2.html');
}]);

angular.module('ngSchemaFormSelect2', []).directive('ngSchemaSelect2', ['$timeout', function ($timeout) {
      return {
         restrict: 'A',
         scope:    true,
         require:  'ngModel',
         link:     function (scope, element, attrs, ngModel) {

            scope.form.params = scope.form.options || {};

            if(scope.form.params.ajax != undefined) {
              scope.form.params.ajax.data = function (params) {
                params.data = scope.model;

                return params;
              };
            }

            element.select2(scope.form.params);

            $timeout(function(){
              element.find('option').get(0).remove();
            }, 500);

            element.append($('<option>', { 
              value: scope.model[scope.form.key],
              text: scope.model[scope.form.key+"_text"],
              selected: true
            }));

            scope.$watch('model.'+scope.form.dependOf, function(newValue, oldValue) {
              scope.selectDisable = newValue == undefined;

              if(oldValue != newValue) {
                element.find('option').remove();
                scope.model[scope.form.key] = undefined;
              }
            });
         }
      };
   }]);

angular.module("schemaForm").run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/decorators/select2/select2.html","<div class=\"form-group schema-form-select has-feedback has-success\" ng-class=\"{'has-error': form.disableErrorState !== true && hasError(), 'has-success': form.disableSuccessState !== true && hasSuccess(), 'has-feedback': form.feedback !== false}\"><label class=\"control-label\">{{ form.title }}</label> \r\n <select ng-schema-select2 class=\"form-control ng-not-empty ng-valid-schema-form ng-dirty ng-touched\" sf-field-model=\"\" ng-disabled=\"form.readonly || selectDisable\" sf-changed=\"form\" schema-validate=\"form\" ng-model=\"model[form.key]\"></select>\r\n <div class=\"help-block\" sf-message=\"form.description\"></div></div> \r\n    \r\n   </div>\r\n");
}]);
