angular.module('browser-notification', [])
  .service('notification', BrowserNotification)
  .name

BrowserNotification.$inject = [
  '$timeout',
  '$window'
]

function BrowserNotification ($timeout, $window) {
  if ($window.Notification) {
    $window.Notification.requestPermission()
  }

  var notificationTimeout = {
    show: showNotification,
    close: closeNotification,
    notification: {}
  }

  function closeNotification () {
    return notificationTimeout.notification.close()
  }

  function showNotification (title= "", options= {}, timeout = 5000) {
    if (!$window.Notification) 
        return
    $window.Notification.requestPermission(function (res) {
      if (res !== 'granted') 
        return

      notificationTimeout.notification = new $window.Notification(title, options)
      
      $timeout(function () {
        notificationTimeout.notification.close()
      }, (timeout))
    })
  }

  return notificationTimeout
}