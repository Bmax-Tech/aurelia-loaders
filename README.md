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

##### color schemes available for `progress-bar` and `spinner` elements
- ![#B0BEC5](https://placehold.it/15/B0BEC5/000000?text=+) `#B0BEC5` - `default`
- ![#2196F3](https://placehold.it/15/2196F3/000000?text=+) `#2196F3` - `primary`
- ![#323a45](https://placehold.it/15/323a45/000000?text=+) `#323a45` - `secondary`
- ![#64DD17](https://placehold.it/15/64DD17/000000?text=+) `#64DD17` - `success`
- ![#FFD600](https://placehold.it/15/FFD600/000000?text=+) `#FFD600` - `warning`
- ![#29B6F6](https://placehold.it/15/29B6F6/000000?text=+) `#29B6F6` - `info`
- ![#ef1c1c](https://placehold.it/15/ef1c1c/000000?text=+) `#ef1c1c` - `danger`

## Usage of `progress-bar` element

**preview**  

<img alt="spinner-1" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/progress-bar.gif" height="40px">  

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
- on-complete : function = callback function, when auto-incrementer is used, this function will be called when progress gets completed  | default = `undefined`
- show-value : boolean = show current progress percentage value in progress bar | default = `true`
```
<progress-bar style-class="" height="" progress="" step="" timer="" timer-interval="" theme="" on-complete.bind="" show-value=""></progress-bar>
```

## Usage of `spinner` element

common options :
- type : string = the spinner type, value can be `S1 to S14` | default = `S1`
- style-class : string = used for external style configurations | default = ''
- size : integer = the width and height | default : `40`
- color : string = spinner color | default : `black`

```
<spinner type="" style-class="" size="" color=""></spinner>
```

### More about Spinners

| Spinner | Preview | Options |
| :---: | :---: | --- |
| `S1` | <img alt="spinner-1" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-1.gif" width="100"> | type: `S1`, size: `100`, color: `HEX or RGB value` |
| `S2` | <img alt="spinner-2" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-2.gif" width="100"> | type: `S2`, size: `100`, color: `HEX or RGB value` |
| `S3` | <img alt="spinner-3" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-3.gif" width="100"> | type: `S3`, size: `100`, color: `HEX or RGB value` |
| `S4` | <img alt="spinner-4" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-4.gif" width="100"> | type: `S4`, size: `100`, color: `HEX or RGB value` |
| `S5` | <img alt="spinner-5" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-5.gif" width="100"> | type: `S5`, size: `100`, color: `HEX or RGB value` |
| `S6` | <img alt="spinner-6" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-6.gif" width="100"> | type: `S6`, size: `100`, color: `HEX or RGB value` |
| `S7` | <img alt="spinner-7" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-7.gif" width="100"> | type: `S7`, size: `100`, color: `HEX or RGB value` |
| `S8` | <img alt="spinner-8" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-8.gif" width="100"> | type: `S8`, size: `100`, color: [`default`, `primary`, `secondary`, `success`, `warning`, `info`, `danger`] |
| `S9` | <img alt="spinner-9" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-9.gif" width="100"> | type: `S9`, size: `100`, color: `HEX or RGB value` |
| `S10` | <img alt="spinner-10" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-10.gif" width="100"> | type: `S10`, size: `100`, color: [`default`, `primary`, `secondary`, `success`, `warning`, `info`, `danger`] |
| `S11` | <img alt="spinner-11" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-11.gif" width="100"> | type: `S11`, size: `100`, color: [`default`, `primary`, `secondary`, `success`, `warning`, `info`, `danger`] |
| `S12` | <img alt="spinner-12" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-12.gif" width="100"> | type: `S12`, size: `100`, color: `HEX or RGB value` |
| `S13` | <img alt="spinner-13" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-13.gif" width="100"> | type: `S13`, size: `100`, color: `HEX or RGB value` |
| `S14` | <img alt="spinner-14" src="https://raw.githubusercontent.com/Bmax-Tech/aurelia-loaders/master/images/spinner-14.gif" width="100"> | type: `S14`, size: `100`, color: [`default`, `primary`, `secondary`, `success`, `warning`, `info`, `danger`] |
