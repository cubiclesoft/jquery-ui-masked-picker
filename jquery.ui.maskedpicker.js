// Rangy Inputs, a jQuery plug-in for selection and caret manipulation within textareas and text inputs.
// https://github.com/timdown/rangyinputs
// Copyright 2014, Tim Down
// Licensed under the MIT license.
// Version: 1.2.0
// Build date: 30 November 2014
!function(e){function t(e,t){var n=typeof e[t];return"function"===n||!("object"!=n||!e[t])||"unknown"==n}function n(e,t){return typeof e[t]!=x}function r(e,t){return!("object"!=typeof e[t]||!e[t])}function o(e){window.console&&window.console.log&&window.console.log("RangyInputs not supported in your browser. Reason: "+e)}function a(e,t,n){return 0>t&&(t+=e.value.length),typeof n==x&&(n=t),0>n&&(n+=e.value.length),{start:t,end:n}}function c(e,t,n){return{start:t,end:n,length:n-t,text:e.value.slice(t,n)}}function l(){return r(document,"body")?document.body:document.getElementsByTagName("body")[0]}var i,u,s,d,f,v,p,m,g,x="undefined";e(document).ready(function(){function h(e,t){var n=e.value,r=i(e),o=r.start;return{value:n.slice(0,o)+t+n.slice(r.end),index:o,replaced:r.text}}function y(e,t){e.focus();var n=i(e);return u(e,n.start,n.end),""==t?document.execCommand("delete",!1,null):document.execCommand("insertText",!1,t),{replaced:n.text,index:n.start}}function T(e,t){e.focus();var n=h(e,t);return e.value=n.value,n}function E(e,t){return function(){var n=this.jquery?this[0]:this,r=n.nodeName.toLowerCase();if(1==n.nodeType&&("textarea"==r||"input"==r&&/^(?:text|email|number|search|tel|url|password)$/i.test(n.type))){var o=[n].concat(Array.prototype.slice.call(arguments)),a=e.apply(this,o);if(!t)return a}return t?this:void 0}}var S=document.createElement("textarea");if(l().appendChild(S),n(S,"selectionStart")&&n(S,"selectionEnd"))i=function(e){var t=e.selectionStart,n=e.selectionEnd;return c(e,t,n)},u=function(e,t,n){var r=a(e,t,n);e.selectionStart=r.start,e.selectionEnd=r.end},g=function(e,t){t?e.selectionEnd=e.selectionStart:e.selectionStart=e.selectionEnd};else{if(!(t(S,"createTextRange")&&r(document,"selection")&&t(document.selection,"createRange")))return l().removeChild(S),void o("No means of finding text input caret position");i=function(e){var t,n,r,o,a=0,l=0,i=document.selection.createRange();return i&&i.parentElement()==e&&(r=e.value.length,t=e.value.replace(/\r\n/g,"\n"),n=e.createTextRange(),n.moveToBookmark(i.getBookmark()),o=e.createTextRange(),o.collapse(!1),n.compareEndPoints("StartToEnd",o)>-1?a=l=r:(a=-n.moveStart("character",-r),a+=t.slice(0,a).split("\n").length-1,n.compareEndPoints("EndToEnd",o)>-1?l=r:(l=-n.moveEnd("character",-r),l+=t.slice(0,l).split("\n").length-1))),c(e,a,l)};var w=function(e,t){return t-(e.value.slice(0,t).split("\r\n").length-1)};u=function(e,t,n){var r=a(e,t,n),o=e.createTextRange(),c=w(e,r.start);o.collapse(!0),r.start==r.end?o.move("character",c):(o.moveEnd("character",w(e,r.end)),o.moveStart("character",c)),o.select()},g=function(e,t){var n=document.selection.createRange();n.collapse(t),n.select()}}l().removeChild(S);var b=function(e,t){var n=h(e,t);try{var r=y(e,t);if(e.value==n.value)return b=y,r}catch(o){}return b=T,e.value=n.value,n};d=function(e,t,n,r){t!=n&&(u(e,t,n),b(e,"")),r&&u(e,t)},s=function(e){u(e,b(e,"").index)},m=function(e){var t=b(e,"");return u(e,t.index),t.replaced};var R=function(e,t,n,r){var o=t+n.length;if(r="string"==typeof r?r.toLowerCase():"",("collapsetoend"==r||"select"==r)&&/[\r\n]/.test(n)){var a=n.replace(/\r\n/g,"\n").replace(/\r/g,"\n");o=t+a.length;var c=t+a.indexOf("\n");"\r\n"==e.value.slice(c,c+2)&&(o+=a.match(/\n/g).length)}switch(r){case"collapsetostart":u(e,t,t);break;case"collapsetoend":u(e,o,o);break;case"select":u(e,t,o)}};f=function(e,t,n,r){u(e,n),b(e,t),"boolean"==typeof r&&(r=r?"collapseToEnd":""),R(e,n,t,r)},v=function(e,t,n){var r=b(e,t);R(e,r.index,t,n||"collapseToEnd")},p=function(e,t,n,r){typeof n==x&&(n=t);var o=i(e),a=b(e,t+o.text+n);R(e,a.index+t.length,o.text,r||"select")},e.fn.extend({getSelection:E(i,!1),setSelection:E(u,!0),collapseSelection:E(g,!0),deleteSelectedText:E(s,!0),deleteText:E(d,!0),extractSelectedText:E(m,!1),insertText:E(f,!0),replaceSelectedText:E(v,!0),surroundSelectedText:E(p,!0)})})}(jQuery);



// jQuery UI Masked Picker.
// (C) 2014 CubicleSoft.  All Rights Reserved.

(function ($) {

$.widget("cubiclesoft.maskedpicker", {
	// jQuery UI widget factory.
	options: {
		widthElement: null,
		minWidth: -1,
		maxWidth: -1,

		mask: [],
		initial: null,

		onInit: null,
		onUpdate: null,
		onCleanupPage: null,
		onShowPage: null,
		onKeypress: null,

		myPosition: 'left top',
		atPosition: 'left bottom',
		showOptions: {},
		hideOptions: {},

		finalElement: null
	},

	_create: function() {
		this.nodeName = this.element[0].nodeName.toLowerCase();
		this.currPage = -1;
		this.focusTimeout = null;
		this.focusEnabled = true;
		this.focusElement = null;
		this.focusSetSelection = false;

		// Attach a new div to the DOM if it doesn't exist.
		if ($('#maskedpicker-page-div').length === 0)
		{
			var html = '<div id="maskedpicker-page-div" class="maskedpicker-page ui-widget ui-helper-clearfix ui-corner-all" style="position: absolute; display: none;">';
			html += '	<div class="maskedpicker-widget ui-widget ui-widget-content ui-helper-clearfix ui-corner-all">';
			html += '		<div class="maskedpicker-header ui-widget-header ui-helper-clearfix ui-corner-all">'
			html += '			<a class="maskedpicker-prev ui-corner-all" data-event="click" data-type="prev" title="Prev"><span class="ui-icon ui-icon-circle-triangle-w">Prev</span></a>'
			html += '			<a class="maskedpicker-next ui-corner-all" data-event="click" data-type="next" title="Next"><span class="ui-icon ui-icon-circle-triangle-e">Next</span></a>'
			html += '			<div class="maskedpicker-title"></div>';
			html += '		</div>'
			html += '		<div class="maskedpicker-body ui-helper-clearfix"></div>';
			html += '	</div>';
			html += '</div>';

			$('body').append(html);

			// Set up all of the generic widget events.
			var mainDiv = $('#maskedpicker-page-div');
			mainDiv.data("started", false);
			mainDiv.data("clickfocus", false);

			mainDiv.find('.maskedpicker-prev').hover(function() {
				$(this).toggleClass('ui-state-hover');
				$(this).toggleClass('maskedpicker-prev-hover');
			}).click(function() {
				var $this = mainDiv.data("current");
				if ($this) {
					$this.selectPage($this.prevPage());
				}
			});

			mainDiv.find('.maskedpicker-next').hover(function() {
				$(this).toggleClass('ui-state-hover');
				$(this).toggleClass('maskedpicker-next-hover');
			}).click(function() {
				var $this = mainDiv.data("current");
				if ($this) {
					$this.selectPage($this.nextPage());
				}
			});

			mainDiv.click(function() {
				var $this = $(this).data("current");
				if ($this) {
					$this._resetFocus();
				}
			});

			// Handle browser events that cause bugs while the widget is active.
			mainDiv.on('mousedown', function() {
				var $this = $(this).data("current");
				if ($this) {
					$(this).data("started", true);
					$this._resetFocusTimeout();
				}
			});

			mainDiv.on('dragstart', function() {
				var $this = $(this).data("current");
				if ($this) {
					$(this).data("started", true);
					$this._resetFocusTimeout();

					return false;
				}
			});

			$(document).on('mousedown', function() {
				mainDiv.data("clickfocus", true);
			});

			$(document).on('mouseup', function() {
				mainDiv.data("clickfocus", false);

				var $this = mainDiv.data("current");
				if ($this) {
					if (mainDiv.data("started")) {
						mainDiv.data("started", false);
						$this._resetFocus();
					}
				}
			});

			// Handle Shift+Tab transitions.  Going backwards should end up at the last page.
			$(document).on('keydown', function(e) {
				if (!e.isDefaultPrevented()) {
					mainDiv.data("lastKeypress", e);
//console.log('lastKeypress saved');
//console.log(e);
				}
			});

			// Handle window resizing.
			$(window).on('resize', function() {
				var $this = mainDiv.data("current");
				if ($this) {
					$this._internalUpdateWidgetPosition();
				}
			});

			// Handle window focus/blur.
			$(window).on('focus', function() {
				var $this = mainDiv.data("current");
				if ($this) {
					if (mainDiv.data("started")) {
						mainDiv.data("started", false);
						$this._resetFocus();
					}
				}
			});

			$(window).on('blur', function() {
				var $this = mainDiv.data("current");
				if ($this) {
					mainDiv.data("started", true);
				}
			});

			$('body').on('focus', function() {
				var $this = mainDiv.data("current");
				if ($this) {
					if (mainDiv.data("started")) {
						mainDiv.data("started", false);
						$this._resetFocus();
					}
				}
			});

			$('body').on('blur', function() {
				var $this = mainDiv.data("current");
				if ($this) {
					mainDiv.data("started", true);
				}
			});
		}

		this.pageDiv = $('#maskedpicker-page-div');

		this.element.addClass("maskedpicker-input");
		if (typeof(this.options.finalElement) !== 'undefined' && this.options.finalElement !== null && this.options.finalElement.val() != '') {
			var newmask = JSON.parse(this.options.finalElement.val());
			for (x = 0; x < newmask.length && x < this.options.mask.length; x++) {
				if (newmask[x].type === this.options.mask[x].type) {
					this.options.mask[x].selected = newmask[x].selected;
					this.options.mask[x].selectedHtml = this._unicodeToHtml(this.options.mask[x].selected);
				}
			}
		}
		else if ((this.nodeName === 'input' || this.nodeName === 'textarea') && typeof(this.options.initial) !== 'string') {
			this.setValue(this.element.val());
		}
		else if (typeof(this.options.initial) === 'string') {
			this.setValue(this.options.initial);
		}

		var $this = this;
		this.refresh();
		this._on(this.element, {
			'focus': function() {
				$this._resetFocusTimeout();

				if (!$this.pageDiv.data("clickfocus") && $this.focusEnabled)  $this.focusTimeout = setTimeout(function() { $this._handleFocus() }, 100);
			},

			'selectionchange': function() {
				$this._resetFocusTimeout();

				$this.focusTimeout = setTimeout(function() { $this._handleFocus() }, 500);
			},

			'click': function() {
				$this._resetFocusTimeout();

				$this.pageDiv.data("lastKeypress", null);
				$this.focusTimeout = setTimeout(function() { $this._handleFocus() }, 100);
			},

			'change': function() {
				$this.refresh();
			},

			'dragstart': function() {
				return false;
			},

			'drop': function() {
				$this._resetFocusTimeout();

				$this.pageDiv.data("lastKeypress", null);
				$this.focusTimeout = setTimeout(function() { $this._handleFocus() }, 100);
			},

			'blur': function() {
				$this._resetFocusTimeout();

				if ($this.focusEnabled)  $this.focusTimeout = setTimeout(function() { $this._handleBlur() }, 100);
			},

			'keydown': function(e) {
				$this._handleKeypress(e);
			},

			'keypress': function(e) {
				$this._handleKeypress(e);
			}
		});
	},

	_destroy: function() {
		this._resetFocusTimeout();
		this.hidePage();
		this.element.removeClass("maskedpicker-input");
	},

	_setOption: function(key, value) {
		this._super(key, value);
	},

	_setOptions: function(options) {
		this._super(options);
		this.refresh();
	},

	// Public widget functions.
	setValue: function(str) {
		for (var x = 0; x < this.options.mask.length; x++) {
			var currmask = this.options.mask[x];

			if (currmask.type === 'date') {
				currmask.initial = '';

				var currdate = $.datepicker.parseDate((typeof(currmask.options.dateFormat) === 'string' ? currmask.options.dateFormat : 'mm/dd/yy'), str, currmask.options);
				if (currdate) {
					currdate = $.datepicker.formatDate((typeof(currmask.options.dateFormat) === 'string' ? currmask.options.dateFormat : 'mm/dd/yy'), currdate, currmask.options);
					if (currdate) {
						currmask.initial = currdate;
						var pos = str.indexOf(currdate);
						if (pos > -1)  str = str.substring(pos + currdate.length);
					}
				}

				currmask.selected = currmask.initial;
			}
			else if (currmask.type === 'fixed') {
				// Move the string forward to the next position.
				var pos = str.indexOf(currmask.value);
				if (pos > -1)  str = str.substring(pos + currmask.value.length);
			}
			else if (currmask.type == 'select') {
				currmask.initial = '';

				// Attempt to find a match.
				var minpos = str.length;
				var minval = false;
				for (var y = 0; y < currmask.values.length; y++) {
					for (var x2 = 0; x2 < currmask.values[y].length; x2++) {
						if (currmask.values[y][x2] !== false) {
							var pos = str.indexOf(currmask.values[y][x2]);
							if (pos > -1 && pos <= minpos) {
								minpos = pos;
								minval = currmask.values[y][x2];
							}
						}
					}
				}

				if (minpos < str.length && minval !== false) {
					currmask.initial = minval;
					str = str.substring(minpos + minval.length);
				}

				currmask.selected = currmask.initial;
			}
			else if (currmask.type == 'freeform') {
				currmask.initial = '';

				if (typeof(currmask.pattern) !== 'undefined') {
					var matches = str.match(currmask.pattern);
					if (matches) {
						var firstmatch = matches[0];
						if (typeof(currmask.limit) !== 'undefined' && currmask.limit <= firstmatch.length)  firstmatch = firstmatch.substring(0, currmask.limit);
						var pos = str.indexOf(firstmatch);
						if (pos > -1) {
							currmask.initial = firstmatch;
							str = str.substring(pos + firstmatch.length);
						}
					}
				}
				else if (typeof(currmask.limit) !== 'undefined' && currmask.limit <= str.length) {
					currmask.initial = str.substring(0, currmask.limit);
					str = str.substring(currmask.limit);
				}
				else {
					currmask.initial = str;
					str = '';
				}

				if (typeof(currmask.limit) !== 'undefined' && typeof(currmask.pad) === 'string' && typeof(currmask.padchar) === 'string' && currmask.padchar.length == 1) {
					while (currmask.initial.length < currmask.limit) {
						if (currmask.pad === 'prefix')  currmask.initial = currmask.padchar + currmask.initial;
						else if (currmask.pad === 'suffix')  currmask.initial += currmask.padchar;
						else  break;
					}
				}

				currmask.selected = currmask.initial;
			}
			else {
				// Handle custom types.
				if (typeof(this.options.onInit) === 'function')  str = this.options.onInit.call(this, str, currmask, x, this.options.mask);
			}
		}
	},

	refresh: function() {
		this._setval(this._internalUpdate());
		this._internalUpdateSelection();
		this._internalUpdateWidgetPosition();
	},

	nearestPage: function(maskPos) {
		if (maskPos >= this.options.mask.length)  maskPos = this.options.mask.length - 1;
		if (maskPos < 0)  maskPos = -1;

		// Find nearest page.
		if (maskPos > -1 && maskPos != this.currPage) {
			this._internalUpdate();

			if (typeof(this.options.mask[maskPos].page) !== 'string') {
				var left = maskPos - 1, right = maskPos + 1;

				while (left > -1 || right < this.options.mask.length) {
					if (right < this.options.mask.length && typeof(this.options.mask[right].page) === 'string') {
						maskPos = right;
						break;
					}

					if (left > -1 && typeof(this.options.mask[left].page) === 'string') {
						maskPos = left;
						break;
					}

					right++;
					left--;
				}

				if (typeof(this.options.mask[maskPos].page) !== 'string') {
					maskPos = -1;
				}
			}
		}

		return maskPos;
	},

	selectPage: function(maskPos) {
		maskPos = this.nearestPage(maskPos);

		this._resetFocus();

		if (maskPos != this.currPage) {
			var prevPage = this.currPage;
			this.currPage = maskPos;

			this.setFocusElement(null);
			this._showPage(prevPage);
		}
	},

	firstPage: function() {
		var x;
		for (x = 0; x < this.options.mask.length && typeof(this.options.mask[x].page) !== 'string'; x++);

		return (x == this.options.mask.length ? -1 : x);
	},

	lastPage: function() {
		var x;
		for (x = this.options.mask.length; x > 0 && typeof(this.options.mask[x - 1].page) !== 'string'; x--);
		x--;

		return x;
	},

	prevPage: function() {
		if (this.currPage < 1)  return -1;

		var x;
		for (x = this.currPage; x > 0 && typeof(this.options.mask[x - 1].page) !== 'string'; x--);
		x--;

		return x;
	},

	nextPage: function() {
		if (this.currPage < 0)  return -1;

		var x;
		for (x = this.currPage + 1; x < this.options.mask.length && typeof(this.options.mask[x].page) !== 'string'; x++);

		return (x == this.options.mask.length ? -1 : x);
	},

	hidePage: function() {
		if (this.currPage > -1) {
			var prevPage = this.currPage;
			this.currPage = -1;

			this._showPage(prevPage);
		}
	},

	setFocusElement: function(newelem) {
		this._resetFocusTimeout();
		this.focusElement = newelem;

		if (newelem === null)  this.focusEnabled = true;
		else {
			var $this = this;

			this.focusEnabled = false;
			this.focusTimeout = setTimeout(function() { $this._resetFocus(); }, 100);
		}
	},

	// Private widget functions.
	_setval: function(str) {
		if (this.nodeName === 'input' || this.nodeName === 'textarea')  this.element.val(str);
		else  this.element.text(str);
	},

	_resetFocusTimeout: function() {
		if (this.focusTimeout) {
			clearTimeout(this.focusTimeout);
			this.focusTimeout = null;
		}
	},

	_internalUpdate: function() {
		if (typeof(this.options.widthElement) === 'undefined' || this.options.widthElement === null)  this.options.widthElement = this.element;

		var str = '';
		for (var x = 0; x < this.options.mask.length; x++) {
			var currmask = this.options.mask[x];

			if (typeof(currmask.prefix) !== 'string')  currmask.prefix = '';
			if (typeof(currmask.suffix) !== 'string')  currmask.suffix = '';
			if (typeof(currmask.initial) !== 'string')  currmask.initial = (typeof(currmask.selected) === 'string' ? currmask.selected : (typeof(currmask.value) === 'string' ? currmask.value : ''));
			if (typeof(currmask.selected) !== 'string')  currmask.selected = currmask.initial;
			if (typeof(currmask.selectedHtml) !== 'string')  currmask.selectedHtml = currmask.selected;
			if (typeof(currmask.entered) !== 'string')  currmask.entered = '';

			if (x == this.currPage && currmask.type === 'freeform' && this.focusElement !== null) {
				var str2 = this.focusElement.val();

				if (typeof(currmask.pattern) !== 'undefined') {
					var matches = str2.match(currmask.pattern);
					if (matches) {
						var firstmatch = matches[0];
						if (typeof(currmask.limit) !== 'undefined' && currmask.limit <= firstmatch.length)  firstmatch = firstmatch.substring(0, currmask.limit);
						var pos = str2.indexOf(firstmatch);
						if (pos > -1)  currmask.selected = firstmatch;
					}
				}
				else if (typeof(currmask.limit) !== 'undefined' && currmask.limit <= str2.length) {
					currmask.selected = str2.substring(0, currmask.limit);
				}
				else {
					currmask.selected = str2;
				}

				if (typeof(currmask.limit) !== 'undefined' && typeof(currmask.pad) === 'string' && typeof(currmask.padchar) === 'string' && currmask.padchar.length == 1) {
					while (currmask.selected.length < currmask.limit) {
						if (currmask.pad === 'prefix')  currmask.selected = currmask.padchar + currmask.selected;
						else if (currmask.pad === 'suffix')  currmask.selected += currmask.padchar;
						else  break;
					}
				}

				currmask.selectedHtml = this._unicodeToHtml(currmask.selected);
			}

			currmask.value = currmask.prefix + currmask.selected + currmask.suffix;
			if (typeof(this.options.onUpdate) === 'function')  this.options.onUpdate.call(this, currmask, x, this.options.mask);
			currmask.start = str.length;

			str += currmask.value;
		}

		if (typeof(this.options.finalElement) !== 'undefined' && this.options.finalElement !== null) {
			var data = [];
			for (var x = 0; x < this.options.mask.length; x++) {
				var currmask = this.options.mask[x];
				data[x] = { 'type': currmask.type, 'selected': currmask.selected };
			}

			this.options.finalElement.val(JSON.stringify(data));
		}

		return str;
	},

	_internalUpdateSelection: function() {
		if (this.focusElement === null && this.currPage > -1) {
			var currmask = this.options.mask[this.currPage];

			this.element.setSelection(currmask.start, currmask.start + currmask.value.length);
		}
	},

	_handleFocus: function() {
		this.focusTimeout = null;

		// Set the current widget to this one so events flow to this widget.
		this.pageDiv.data("current", this);

		// Get the current user selection.
		var sel = this.element.getSelection();

		if (this.focusElement !== null) {
			this.focusElement.focus();
		}

		// Refresh the mask values.
		this.refresh();

		// Handle previous Shift+Tab resulting in focus.
		var lastKeypress = this.pageDiv.data("lastKeypress");
		if (this.focusElement === null && lastKeypress && ((typeof(lastKeypress) === 'string' && lastKeypress === 'shift+tab') || (typeof(lastKeypress) === 'object' && lastKeypress.shiftKey && lastKeypress.keyCode == 9))) {
//console.log('lastpage');
			this.selectPage(this.lastPage());
		}
		else if (this.focusElement === null && lastKeypress && ((typeof(lastKeypress) === 'string' && lastKeypress === 'tab') || (typeof(lastKeypress) === 'object' && !lastKeypress.shiftKey && lastKeypress.keyCode == 9))) {
//console.log('firstpage');
			this.selectPage(this.firstPage());
		}
		else if (sel) {
//console.log('otherpage');
			// Find the nearest mask position.
			var x, y = 0;
			for (x = 0; x < this.options.mask.length && y + this.options.mask[x].value.length < sel.start; x++) {
				y += this.options.mask[x].value.length;
			}

			// Select the next page closest to the mask position.
			this.selectPage(x);
		}
	},

	// Restores focus and selection back to the input element.
	_resetFocus: function() {
		this._resetFocusTimeout();

		if (!this.pageDiv.data("started")) {
			this.focusEnabled = false;

			if (this.focusElement !== null) {
				if (!this.focusElement.is(':focus'))  this.focusElement.focus();

				// Only set the selection on the first call.
				if (this.focusSetSelection) {
					this.focusSetSelection = false;
					this.focusElement.setSelection(0, this.focusElement.val().length);
				}
			}
			else if (this.nodeName === 'input' || this.nodeName === 'textarea') {
				if (!this.element.is(':focus'))  this.element.focus();
			}

			this.refresh();

			if (this.focusElement === null) {
				this.focusEnabled = true;
			}
		}
	},

	_handleBlur: function() {
		this.focusTimeout = null;

		if (!this.pageDiv.data("started")) {
			// Refresh the mask values.
			this._setval(this._internalUpdate());

			// Hide the page.
			this.hidePage();
		}
	},

	_cleanupPage: function(maskPos) {
		if (maskPos > -1) {
			var currmask = this.options.mask[maskPos];
			var bodyDiv = this.pageDiv.find('div.maskedpicker-body');

			// Cleanup internally supported types.
			switch (currmask.type) {
				case 'date':
				{
					bodyDiv.datepicker('destroy');

					break;
				}
				case 'select':
				{
					bodyDiv.find('.maskedpicker-body-select').off('click', 'td a');

					break;
				}
				case 'freeform':
				{
					if (this.focusElement !== null)  this.refresh();

					this.setFocusElement(null);

					break;
				}
				default:  break;
			}

			// Handle custom types.
			if (typeof(this.options.onCleanupPage) === 'function')  this.options.onCleanupPage.call(this, currmask, bodyDiv, maskPos, this.options.mask);
		}
	},

	// Escapes most characters except & so that Unicode characters can be used.
	_escapeHtml: function (text) {
		var map = {
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#039;'
		};

		return text.replace(/[<>"']/g, function(m) { return map[m]; });
	},

	_unicodeToHtml: function (str) {
		return str.replace(/[\u00A0-\u2666]/g, function(c) {
			return '&#' + c.charCodeAt(0) + ';';
		});
	},

	_generateSelectHtml: function(currmask, initial) {
		var html = '';

		if (initial)  html += '<div class="maskedpicker-body-select">';
		html += '<table><tbody>';
		for (var y = 0; y < currmask.values.length; y++) {
			html += '<tr>';
			for (var x = 0; x < currmask.values[y].length; x++) {
				var styles = '';
				if (currmask.fixed && x < currmask.values[y].length - 1)  styles += (styles != '' ? ' ' : '') + 'width: ' + (100 / currmask.values[y].length) + '%;';

				var classes = '';
				if (currmask.values[y][x] === false)  classes += (classes != '' ? ' ' : '') + 'ui-state-disabled';

				html += '<td' + (classes != '' ? ' class="' + classes + '"' : '') + (styles != '' ? ' style="' + styles + '"' : '') + '>';
				if (typeof(currmask.values[y][x]) === 'string')  html += '<a href="#" class="ui-state-default' + (currmask.values[y][x] === currmask.selectedHtml ? ' ui-state-active' : '') + '" data-value="' + this._escapeHtml(currmask.values[y][x]) + '">' + this._escapeHtml(currmask.values[y][x]) + '</a>';
				html += '</td>';
			}
			html += '</tr>';
		}
		html += '</tbody></table>';
		if (initial)  html += '</div>';

		return html;
	},

	_showPage: function(prevPage) {
		var $this = this;

		if (this.currPage < 0) {
			this.currPage = -1;

			// Stop sending global events to this widget.
			this.pageDiv.data("current", null);

			this.options.hideOptions.complete = function() {
				$this._cleanupPage(prevPage);
			};

			// Trigger the hiding animation.
			if (prevPage > -1)  this.pageDiv.hide(this.options.hideOptions);
			else  this.pageDiv.hide(0, this.options.hideOptions.complete);
		}
		else {
			// Cleanup the previous page.
			this._cleanupPage(prevPage);

			this._resetFocus();

			// Update the selection.
			this._internalUpdateSelection();

			// Force the div to hide.
			this.pageDiv.hide().finish();

			// Fill in the page div.
			var currmask = this.options.mask[this.currPage];
			this.pageDiv.find('.maskedpicker-title').html(currmask.page);

			var bodyDiv = this.pageDiv.find('div.maskedpicker-body');
			bodyDiv.html('');

			// Initialize internally supported types.
			currmask.entered = '';
			html = '';
			switch (currmask.type) {
				case 'date':
				{
					currmask.options.defaultDate = currmask.selected;

					currmask.options.onSelect = function(newdate) {
						currmask.selected = newdate;
						currmask.selectedHtml = $this._unicodeToHtml(currmask.selected);

						if ($this.nextPage() > -1)  $this.selectPage($this.nextPage());
						else  $this.refresh();
					};

					bodyDiv.datepicker(currmask.options);

					break;
				}
				case 'select':
				{
					if (typeof(currmask.fixed) === 'undefined')  currmask.fixed = true;

					bodyDiv.html(this._generateSelectHtml(currmask, true));

					bodyDiv.find('.maskedpicker-body-select').on('click', 'td a', function(e) {
						currmask.selected = $(e.target).attr('data-value');
						currmask.selectedHtml = $this._unicodeToHtml(currmask.selected);

						$this.pageDiv.data("lastKeypress", "tab");
						if ($this.nextPage() > -1)  $this.selectPage($this.nextPage());
						else {
							var excludeElements = $this.focusElement;
							$this.hidePage();
							var elem = $this._findNextInput($this.element, excludeElements);
							if (elem)  elem.focus();
						}

						e.preventDefault();
					});

					break;
				}
				case 'freeform':
				{
					if (this.nodeName === 'input' || typeof(currmask.multiline) === 'undefined' || !currmask.multiline) {
						html += '<div><input type="text" class="maskedpicker-body-freeform ui-widget ui-widget-content ui-corner-all" value="' + currmask.selectedHtml + '" /></div>';
					}
					else {
						html += '<div><textarea class="maskedpicker-body-freeform ui-widget ui-widget-content ui-corner-all">' + currmask.selectedHtml + '</textarea></div>';
					}
					bodyDiv.html(html);

					currmask.lastSelected = currmask.selected;
					var elem = bodyDiv.find('.maskedpicker-body-freeform');
					this.setFocusElement(elem);
					this.focusSetSelection = true;
					elem.on('blur', function() {
						$this._resetFocusTimeout();

						$this.focusTimeout = setTimeout(function() { $this._handleBlur() }, 100);
					});

					elem.on('keydown', function(e) {
						$this._handleKeypress(e);
					});

					elem.on('keypress', function(e) {
						$this._handleKeypress(e);
					});

					break;
				}
				default:  break;
			}

			// Handle custom types.
			if (typeof(this.options.onShowPage) === 'function')  this.options.onShowPage.call(this, currmask, bodyDiv, this.currPage, this.options.mask);

			// Update the widget position and prev/next buttons.
			this._internalUpdateWidgetPosition();

			// Trigger the showing animation.
			if (prevPage > -1)  this.pageDiv.show();
			else  this.pageDiv.show(this.options.showOptions);
		}
	},

	_internalUpdateWidgetPosition: function() {
		if (this.currPage > -1) {
			// Resize the page div.
			var newWidth = this.options.widthElement.width();
			if (newWidth < this.options.minWidth)  newWidth = this.options.minWidth;
			if (this.options.maxWidth > -1 && newWidth > this.options.maxWidth)  newWidth = this.options.maxWidth;
			this.pageDiv.width(newWidth);

			// For position to work, the div has to be visible, so show it off screen.
			var visible = this.pageDiv.is(':visible');
			if (!visible)  this.pageDiv.css({top: '-1000px'}).show();

			// Update previous button status.
			if (this.prevPage() > -1)  this.pageDiv.find('.maskedpicker-prev').show();
			else  this.pageDiv.find('.maskedpicker-prev').hide();

			// Update next button status.
			if (this.nextPage() > -1)  this.pageDiv.find('.maskedpicker-next').show();
			else  this.pageDiv.find('.maskedpicker-next').hide();

			// Position the page div near the input element.
			this.pageDiv.position({
				of: this.element,
				my: this.options.myPosition,
				at: this.options.atPosition,
				collision: 'flip'
			});

			if (!visible)  this.pageDiv.hide();
		}
	},

	// For input fields that have taken the focus that are in a page.
	// Used mostly for Shift+Tab navigation.
	_findPrevInput: function(elem, exclude) {
		var fields = $($('a[href], button, input, select, textarea').not(exclude).filter(':visible').filter('a, :enabled').toArray().sort(function(a, b) {
			return ((a.tabIndex > 0) ? a.tabIndex : 1000) - ((b.tabIndex > 0) ? b.tabIndex : 1000);
		}));

		var num = fields.index(elem) - 1;
		if (num < 0)  num = fields.length - 1;

		return fields.eq(num);
	},

	// For input fields that have taken the focus that are in a page.
	// Used mostly for Tab navigation.
	_findNextInput: function(elem, exclude) {
		var fields = $($('a[href], button, input, select, textarea').not(exclude).filter(':visible').filter('a, :enabled').toArray().sort(function(a, b) {
			return ((a.tabIndex > 0) ? a.tabIndex : 1000) - ((b.tabIndex > 0) ? b.tabIndex : 1000);
		}));

		var num = fields.index(elem) + 1;
		if (num >= fields.length)  num = 0;

		return fields.eq(num);
	},

	_updateEnteredTracker: function(currmask, bodyDiv) {
		var enteredDiv = bodyDiv.find('.maskedpicker-body-enteredinput');
		if (currmask.entered === '') {
			enteredDiv.remove();
		}
		else {
			if (enteredDiv.length === 0) {
				var html = '';
				html += '<div class="maskedpicker-body-enteredinput ui-widget-content"></div>';
				bodyDiv.append(html);

				enteredDiv = bodyDiv.find('.maskedpicker-body-enteredinput');
			}

			enteredDiv.text(currmask.entered);
		}
	},

	_specialKeys: {
		8: "backspace", 9: "tab", 10: "return", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
		20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
		37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 59: ";", 61: "=",
		96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
		104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/",
		112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8",
		120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 173: "-", 186: ";", 187: "=",
		188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'"
	},

	_shiftNums: {
		"`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&",
		"8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<",
		".": ">",  "/": "?",  "\\": "|"
	},

	_getKeypressOptions: function(e) {
		// Calculate the keypress.
		var special = this._specialKeys[e.keyCode];
		var modifier = "";

		$.each(['alt', 'ctrl', 'meta', 'shift'], function(x, specialKey) {
			if (e[specialKey + 'Key'] && special !== specialKey)  modifier += specialKey + '+';
		});

		modifier = modifier.replace('alt+ctrl+meta+shift', 'hyper');

		var options = {};
		var character = (e.which !== 0 ? String.fromCharCode(e.which).toLowerCase() : null);

		options['special'] = special;
		if (special) {
			options[modifier + special] = true;
		}

		options['character'] = character;
		if (character) {
			if (e.type === 'keypress')  options['special'] = null;

			options[modifier + character] = true;
			if (this._shiftNums[character]) {
				options[modifier + this._shiftNums[character]] = true;

				// Handle Shift+number cases.
				if (modifier === 'shift+')  options[this._shiftNums[character]] = true;
			}
		}

		return options;
	},

	_handleKeypress: function(e) {
		if (this.currPage < 0)  return;

		var options = this._getKeypressOptions(e);
//console.log(e);
//console.log(options);

		this.refresh();
		this._resetFocusTimeout();
		var $this = this;
		this.focusTimeout = setTimeout(function() { $this._resetFocus() }, 20);

		var currmask = this.options.mask[this.currPage];
		var bodyDiv = this.pageDiv.find('div.maskedpicker-body');

		// Handle internally supported types.
		var handled = false;
		switch (currmask.type) {
			case 'date':
			{
				if (options['special'] && options['special'] !== 'shift') {
				}
				else if (e.type === 'keydown') {
					// Skip this event.  Let keypress handle it.
					handled = true;
				}
				else if (!options['special'] && e.which !== 0) {
					var newentered = currmask.entered + String.fromCharCode(e.which);

					try {
						var newdate = $.datepicker.parseDate((typeof(currmask.options.dateFormat) === 'string' ? currmask.options.dateFormat : 'mm/dd/yy'), newentered, currmask.options);
						if (newdate) {
							currmask.selected = $.datepicker.formatDate((typeof(currmask.options.dateFormat) === 'string' ? currmask.options.dateFormat : 'mm/dd/yy'), newdate, currmask.options);
							currmask.selectedHtml = currmask.selected;

							bodyDiv.datepicker('setDate', currmask.selected);
						}
					}
					catch (ex) {
					}

					currmask.entered = newentered;
					this._updateEnteredTracker(currmask, bodyDiv);

					e.preventDefault();
				}

				break;
			}
			case 'select':
			{
				if (options['special'] && options['special'] !== 'shift') {
					for (var y = 0; y < currmask.values.length; y++) {
						for (var x = 0; x < currmask.values[y].length; x++) {
							if (currmask.values[y][x] !== false && currmask.entered === currmask.values[y][x]) {
								currmask.selected = currmask.entered;
								currmask.selectedHtml = currmask.selected;

								bodyDiv.find('.maskedpicker-body-select').html(this._generateSelectHtml(currmask, false));

								if (options['special'] === 'return')  options['right'] = true;
								else {
									currmask.entered = '';
									this._updateEnteredTracker(currmask, bodyDiv);

									e.preventDefault();
								}
							}
						}
					}
				}
				else if (e.type === 'keydown') {
					// Skip this event.  Let keypress handle it.
					handled = true;
				}
				else if (!options['special'] && e.which !== 0) {
					var newentered = currmask.entered + String.fromCharCode(e.which);

					var found = 0, currexact = false;
					for (var y = 0; y < currmask.values.length; y++) {
						for (var x = 0; x < currmask.values[y].length; x++) {
							if (currmask.values[y][x] !== false) {
								if (currmask.entered === currmask.values[y][x])  currexact = true;
								if (newentered === currmask.values[y][x].substring(0, newentered.length))  found++;
							}
						}
					}

					if (found) {
						for (var y = 0; y < currmask.values.length; y++) {
							for (var x = 0; x < currmask.values[y].length; x++) {
								if (currmask.values[y][x] !== false) {
									if (found === 1 && newentered === currmask.values[y][x]) {
										// Select this element and move to the next page.
										currmask.selected = currmask.values[y][x];
										currmask.selectedHtml = currmask.selected;

										this.pageDiv.data("lastKeypress", "tab");
										if (this.nextPage() > -1)  this.selectPage(this.nextPage());
										else {
											var excludeElements = this.focusElement;
											this.hidePage();
											var elem = this._findNextInput(this.element, excludeElements);
											if (elem)  elem.focus();
										}

										e.preventDefault();
									}
									else if (newentered === currmask.values[y][x].substring(0, newentered.length)) {
										currmask.entered = newentered;
										this._updateEnteredTracker(currmask, bodyDiv);

										e.preventDefault();
									}
								}
							}
						}
					}
					else if (currexact && this.nextPage() > -1) {
						currmask.selected = currmask.entered;
						currmask.selectedHtml = currmask.selected;

						this.selectPage(this.nextPage());

						e.preventDefault();
					}
				}

				break;
			}
			case 'freeform':
			{
				if (this.focusElement !== null) {
					if (options['tab']) {
						if (this.nextPage() > -1) {
							this.pageDiv.data("lastKeypress", null);
							this.selectPage(this.nextPage());
						}
						else {
							this.pageDiv.data("lastKeypress", e);
							var excludeElements = this.focusElement;
							this.hidePage();
							var elem = this._findNextInput(this.element, excludeElements);
							if (elem)  elem.focus();
						}

						e.preventDefault();
					}
					else if (options['shift+tab']) {
						if (this.prevPage() > -1) {
							this.pageDiv.data("lastKeypress", null);
							this.selectPage(this.prevPage());
						}
						else {
							this.pageDiv.data("lastKeypress", e);
							var excludeElements = this.focusElement;
							this.hidePage();
							var elem = this._findPrevInput(this.element, excludeElements);
							if (elem)  elem.focus();
						}

						e.preventDefault();
					}
					else if (options['left'] || options['ctrl+left']) {
						if (this.prevPage() > -1) {
							var sel = this.focusElement.getSelection();
							if (sel && sel.start == 0 && sel.end == 0) {
								this.selectPage(this.prevPage());

								e.preventDefault();
							}
						}
					}
					else if (options['right'] || options['ctrl+right']) {
						if (this.nextPage() > -1) {
							var sel = this.focusElement.getSelection();
							var y = this.focusElement.val().length;
							if (sel && sel.start == y && sel.end == y) {
								this.selectPage(this.nextPage());

								e.preventDefault();
							}
						}
					}
					else if (options['special'] === 'esc') {
						if (this.focusElement.val() !== currmask.initial) {
							var newval = (this.focusElement.val() === currmask.lastSelected ? currmask.initial : currmask.lastSelected);

							// Reset the timeout to include updating the value because web browsers are broken.
							this._resetFocusTimeout();
							this.focusTimeout = setTimeout(function() {
								$this.focusElement.val(newval);
								$this._resetFocus()
							}, 20);
						}

						e.preventDefault();
					}
					else if (!options['special']) {
						// Rudimentary next page jumping code (i.e. nothing fancy).
						var currchar = String.fromCharCode(e.which);

						if (this.nextPage() > -1) {
							var str = this.options.mask[this.currPage + 1].prefix;
							var pos = str.indexOf(currchar);

							if (pos < 0 && this.options.mask[this.currPage + 1].type === 'fixed') {
								str = this.options.mask[this.currPage + 1].selected;
								pos = str.indexOf(currchar);
							}

							if (pos > -1) {
								this.selectPage(this.nextPage());

								e.preventDefault();
							}
						}
					}
				}

				handled = true;

				break;
			}
			default:  break;
		}

		// Handle custom keys.
		if (typeof(this.options.onKeypress) === 'function')  handled = this.options.onKeypress.call(this, handled, e, options, currmask, bodyDiv, this.currPage, this.options.mask);

		// Handle keys that haven't been handled.
		if (!handled) {
//console.log('NOT handled');
			if (options['tab'] || options['right'] || options['ctrl+right'] || options['down']) {
				if (this.nextPage() > -1) {
					this.selectPage(this.nextPage());

					if (options['tab'])  e.preventDefault();
				}

				if (!options['tab'])  e.preventDefault();
			}
			else if (options['shift+tab'] || options['left'] || options['ctrl+left'] || options['up']) {
				if (this.prevPage() > -1) {
					this.selectPage(this.prevPage());

					if (options['shift+tab'])  e.preventDefault();
				}

				if (!options['shift+tab'])  e.preventDefault();
			}
			else if (options['home'] || options['ctrl+up']) {
				this.selectPage(this.firstPage());

				e.preventDefault();
			}
			else if (options['end'] || options['ctrl+down']) {
				this.selectPage(this.lastPage());

				e.preventDefault();
			}
			else if (options['special'] === 'backspace') {
				if (currmask.entered !== '') {
					currmask.entered = '';

					this._updateEnteredTracker(currmask, bodyDiv);
				}
				else if (currmask.selected !== currmask.initial) {
					currmask.selected = currmask.initial;

					this._showPage(this.currPage);
				}
				else if (this.prevPage() > -1)  this.selectPage(this.prevPage());

				e.preventDefault();
			}
			else if (options['special'] === 'del') {
				currmask.selected = currmask.initial;
				currmask.entered = '';

				this._updateEnteredTracker(currmask, bodyDiv);

				e.preventDefault();
			}
			else if (options['special'] === 'esc') {
				if (currmask.entered !== '') {
					currmask.entered = '';

					this._updateEnteredTracker(currmask, bodyDiv);
				}

				e.preventDefault();
			}
			else if (!options['special'] && e.which !== 0) {
				e.preventDefault();
			}
		}

		// Update the position of the widget if the content changed.
		this._internalUpdateWidgetPosition();
	}
});

})(jQuery);
