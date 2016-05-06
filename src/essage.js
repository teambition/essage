/* Essage - a more elegant way to show message
 * https://github.com/sofish/essage
 * modified by Teambition, https://github.com/teambition/essage
 */
~function(win, doc) {

  var Utils = {

    is: function(obj, type) {
      return Object.prototype.toString.call(obj).slice(8, -1) === type;
    },

    copy: function(defaults, source) {
      for(var p in source) {
        if(source.hasOwnProperty(p)) {
          var val = source[p];
          defaults[p] = this.is(val, 'Object') ? this.copy({}, val) :
            this.is(val, 'Array') ? this.copy([], val) : val;
        }
      }
      return defaults;
    }
  }

  var Essage = function() {
    var self = this;

    this.isShowed = false;

    this.defaults = {
      placement: 'top',
      status: 'normal',
      duration: -1
    }

    this.el = doc.createElement('div');
    this.el.className = 'essage';

    this.close = '<span class="close">&times;</span>';
    this.error = '<span class="icon icon-circle-error"></span>';
    this.warning = '<span class="icon icon-circle-warning"></span>';
    this.success = '<span class="icon icon-circle-check"></span>';
    this.info = '<span class="icon icon-circle-info"></span>'

    this.el.onclick = function(e) {
      var e = e || win.event
        , target = e.target || e.srcElement;
      if(target.className === 'close') self.hide();
    }

    // placement of the message, by default is `top`
    this.placement = 'top';

    doc.body.appendChild(this.el);
    this.el.top = -this._height();

    return this;
  };

  Essage.prototype._height = function() {
    return this.el.offsetHeight || this.el.clientHeight;
  };
  Essage.prototype._width = function () {
    return this.el.offsetWidth || this.el.clientWidth;
  }

  Essage.prototype._class = function(classname, isRemove) {
    var el = this.el;

    if(el.classList) {
      el.classList[isRemove ? 'remove' : 'add'](classname);
    } else {
      var defaultclass= el.className
        , reg = new RegExp('\\b' + classname + '\\b', 'g');

      el.className = isRemove ? defaultclass.replace(reg, '') :
        defaultclass.match(reg) ? defaultclass : (defaultclass + ' ' + classname);
    }

    return el;
  };

  Essage.prototype.set = function(message) {

    message = typeof message === 'string' ? { message: message } : message;

    // copy for each message
    this.config = Utils.copy({}, this.defaults);
    this.config = Utils.copy(this.config, message);

    // placement check
    !this.config.placement.match(/^(?:top|bottom)$/) && (this.config.placement = 'top');

    // adjust placement
    this.el.style[this.config.placement === 'top' ? 'bottom' : 'top'] = 'auto';

    // set status(className)
    this.el.className = 'essage';
    this._class('essage-' + this.config.status);

    return this;
  };

  Essage.prototype.show = function(message) {
    var el = this.el
    var self = null;

    if (this.isShowed)
      return;

    self = this.set(message);

    this.isShowed = true;

    // set message
    el.innerHTML = this.close + this[this.config.status] + ' ' + this.config.message;

    var top = -this._height() - 50;
    var marginLeft = - this._width()/2;
    this.el.style.marginLeft = marginLeft + 'px';

    // disppear automaticlly
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    if (self.config.duration > 0) {
      this._timeout = setTimeout(function() {
        self.hide();
      }, self.config.duration);
    }

    el.style[this.config.placement] = '20px';

    return this;
  };

  Essage.prototype.hide = function() {
    var dest = -this._height() - 50;

    if (!this.isShowed)
      return;

    this.isShowed = false;

    this.el.style[this.config.placement] = dest + 'px';

    return this;
  }

  Essage.prototype.default = function(config) {
    if (typeof config.duration === 'number') {
      this.defaults.duration = config.duration;
    }
  }

  // export to window
  win.Essage = new Essage();

}(window, document);
