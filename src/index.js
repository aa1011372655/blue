const observe = (val) => {
    if (typeof val == 'object') {
        new Observer(val);
    }
};
// defineReactive方法仅仅将data的属性转换为访问器属性
const defineReactive = (data, key, val)=> {
    // 递归观测子属性
    observer(val);
    let dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            dep.add();
            return val
        },
        set: function (newVal) {
            if (val === newVal) {
                return
            }
            // 对新值进行观测
            observer(newVal);
            dep.run();
        }
    });
};

class Dep {
    constructor() {
        this.run = [];
    }

    add() {
        this.run.push(Dep.target);
    }

    run() {
        let l = this.run.length;
        for (let i = 0; i < l; i++) {
            this.run[i].fn();
        }
    }
}
Dep.target = null;
class Observer {
    constructor(obj) {
        this.walk(obj);
    }

    walk(obj) {
        for (let key in obj) {
            defineReactive(obj, key, obj[key]);
        }
    }
}
function pushTarget(watch) {
    Dep.target = watch
}

class Watch {
    constructor(key, fn, th) {
        this.key = key;
        this.fn = fn;
        pushTarget(this);
        th.$data[key];
    }
}
class Blue {
    constructor(obj = {}) {
        this.$el = this.getEl(obj.el);
        this._proxy(obj.data);
        observe(this.data);
    }

    getEl(el) {
        return typeof el == 'string' ? document.querySelector(el) : el;
    }

    _proxy(data) {
        for (var key in data) {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get: function () {
                    return data[key];
                },
                set: function (newVal) {
                    if (data[key] === newVal) {
                        return;
                    }
                }
            });
        }
    }

    $watch(key, func) {
        new Watch(key, func, this);
    }
}
window.Blue = Blue;