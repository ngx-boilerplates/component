import angular from 'angular';
import config from './config';

export default function(ngModule, options){
  angular.merge(config, options);
};
