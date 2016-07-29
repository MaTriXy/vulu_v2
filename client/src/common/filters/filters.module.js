export default angular.module('si.filters', [])

.filter('linkyWithHtml', function($filter) {
  return function(value) {
    if (value){
      var linked = $filter('linky')(value);
      var replaced = linked.replace(/\&gt;/g, '>').replace(/\&lt;/g, '<');
    }
    return replaced;
  };
});