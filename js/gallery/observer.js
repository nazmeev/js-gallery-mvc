export default class Observer {
    constructor() {
        this.events = {};
    }

    subscribeEvent(name, func) {
        console.log('subscribeEvent' + name);
        this.events[name] = func;
    }
    
    callEvent(name, arg) {
        console.log('callEvent' + name);
        if (this.events[name]) {
            this.events[name](arg);
        }
    }
}
