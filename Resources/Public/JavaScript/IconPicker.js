define(['TYPO3/CMS/Ckeditor5Bundle', '@blueways/bw-icons/IconSelection.js'], (function (ckeditor5Bundle_js, IconSelection) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var IconSelection__default = /*#__PURE__*/_interopDefaultLegacy(IconSelection);

    class IconPicker extends ckeditor5Bundle_js.Core.Plugin {
        init() {
            // @ts-ignore
            const editor = this.editor;
            editor.ui.componentFactory.add(IconPicker.pluginName, locale => {
                const button = new ckeditor5Bundle_js.UI.ButtonView(locale);
                button.label = 'Icon Picker';
                // @todo introduce SVG loader
                button.icon = '<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><style>.cls-1{fill:none;}.cls-2{fill:#FF0000;}}</style><linearGradient id="Unbenannter_Verlauf_19" x1="3" y1="8" x2="13" y2="8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.1" stop-color="#464646"/><stop offset="0.9" stop-color="#464646"/><stop offset="1" stop-opacity="0"/></linearGradient></defs><title>typo3_softhyphen</title><rect class="cls-1" width="16" height="16"/><path class="cls-2" d="M1,8a8.51,8.51,0,0,1,.4-2.7A6.12,6.12,0,0,1,2.79,3H4a9.55,9.55,0,0,0-.78,1.13A7,7,0,0,0,2.67,5.3a5.91,5.91,0,0,0-.32,1.27,9.35,9.35,0,0,0,0,2.86,5.91,5.91,0,0,0,.32,1.27,7,7,0,0,0,.55,1.17A9.55,9.55,0,0,0,4,13H2.79A6.12,6.12,0,0,1,1.4,10.7,8.51,8.51,0,0,1,1,8Z"/><path class="cls-2" d="M15,8a8.51,8.51,0,0,1-.4,2.7A6.12,6.12,0,0,1,13.21,13H12a9.55,9.55,0,0,0,.78-1.13,7,7,0,0,0,.55-1.17,5.91,5.91,0,0,0,.32-1.27,9.35,9.35,0,0,0,0-2.86,5.91,5.91,0,0,0-.32-1.27,7,7,0,0,0-.55-1.17A9.55,9.55,0,0,0,12,3h1.21A6.12,6.12,0,0,1,14.6,5.3,8.51,8.51,0,0,1,15,8Z"/><rect class="cls-3" x="3" y="7" width="10" height="2"/></svg>';
                button.keystroke = 'Ctrl!+-';
                button.on('execute', () => this.onRteIconButtonClick());
                return button;
            });
            this.picker = new IconSelection__default["default"](2, '', '');
            this.picker.initForRteEditor(editor);
        }
        onRteIconButtonClick() {
            this.picker.rteButtonClick();
        }
    }
    IconPicker.pluginName = 'IconPicker';

    return IconPicker;

}));
