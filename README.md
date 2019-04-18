# `aurelia-loaders`

This is an aurelia compatible plugin for loading indicators. 

## How to use aurelia-loaders

install `@bmaxtech/aurelia-loaders` via `npm` or `yarn`
```shell
npm i @bmaxtech/aurelia-loaders --save
```
or
```shell
yarn add @bmaxtech/aurelia-loaders
```

then register plugin with your application
```shell
aurelia.use.plugin(PLATFORM.moduleName('@bmaxtech/aurelia-loaders'))
```

use `progress-bar` or `spinner` element within your application

## Usage of `progress-bar` element
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
- theme : string = color scheme of the progress bar, value can be `primary`, `secondary`, `success`, `info`, `warning` or `danger`  | default = `primary`
```
<progress-bar style-class="" height="" progress="" step="" timer="" timer-interval="" theme=""></progress-bar>
```

## Usage of `spinner` element

common options :
- type : string = the spinner type, value can be `S1 to S14` | default = `S1`
- style-class : string = used for external style configurations | default = ''
- size : integer = the width and height | default : `40`
- color : string = spinner color | default : `black`

```
<spinner type="" style-class="" size="" color=""></progress-bar>
```

### More about Spinners

| Spinner | Preview | Options |
| :---: | :---: | --- |
| `S1` | <img alt="spinner-1" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-1.gif" width="100"> | type: `S1`, color: `HEX or RGB value` |
| `S2` | <img alt="spinner-2" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-2.gif" width="100"> | type: `S2`, color: `HEX or RGB value` |
