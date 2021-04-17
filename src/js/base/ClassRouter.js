export default class ClassRouter {
    constructor (obj) {
        this.obj = obj;
        
        this.initControlClass();
    }

    initControlClass () {
        this.specTag = document.getElementsByTagName('router')[0];

        for ( let i = 0; i < Object.keys(this.obj).length; i += 1 ) {
            const classKeys = Object.keys(this.obj)[i];
            
            if (this.specTag && this.specTag.classList.contains(classKeys) ) {
                return this.obj[classKeys]();
            }
        }

        return this.obj['*']();
    }
}