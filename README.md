Angular browser notification

Usage

```
angular.module('app',["browser-notification"])
.controller("angularCtrl", fuction (notification){

options = {body: "Body message"}
timeout = 3000 //Default is 5000
notification.show("Title", options, timeout)
})

```


More options access https://developer.mozilla.org/en-US/docs/Web/API/notification

Based on hanford [Angular Notify](https://github.com/hanford/angular-notify)


contributors
=====
* Udo Schmidt Junior (Nistarok)
