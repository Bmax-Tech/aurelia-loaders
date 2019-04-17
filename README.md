# `aurelia-loaders`

This is an aurelia compatible plugin for loading indicators. 

## How to use aurelia-loaders

install `@bmaxtech\aurelia-loaders` via `npm` or `yarn`

then register plugin with your application
```shell
aurelia.use.plugin(PLATFORM.moduleName('@bmaxtech/aurelia-loaders'))
```

now, use `progress-bar` element within your application 

**basic usage**
```
<progress-bar progress="50"></progress-bar>
```

**advance usage**
- style-class : string = used for external style configurations | default = ''
- height : integer = adjust progress bar height | default = 20px
- progress : integer = current progress | default = 0
- step : integer = progress bar incrementing step value | default = 10
- timer : boolean = auto-incrementer, if this is `true`, the progress bar will be automatically incremented | default = false
- timer-interval : integer = auto-incrementer interval time in seconds | default = 2500 (2.5s)
```
<progress-bar style-class="" height="" progress="" step="" timer="" timer-interval=""></progress-bar>
```
