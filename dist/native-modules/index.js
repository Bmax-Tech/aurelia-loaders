import { PLATFORM } from 'aurelia-pal';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./elements/progress-bar/progress-bar'),
        PLATFORM.moduleName('./elements/spinner/spinner'),
    ]);
}
