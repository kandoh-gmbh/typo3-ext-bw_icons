# TYPO3 Icon Picker

Form element for icon selection. Generates a browsable gallery of your icon fonts and SVGs - just link your stylesheet or image directory. Works with FontAwesome, Bootstrap, Icomoon.. Optionally adds icon field to pages and tt_content.

![Backend Form](https://bytebucket.org/blueways/bw_icons/raw/master/Documentation/Images/backend1.jpg)

## Demo

![Video preview](https://bytebucket.org/blueways/bw_icons/raw/master/Documentation/Images/preview.gif)

## Installation

1. Install via composer
   ``` {.bash}
   composer require blueways/bw-icons
   ```

2. Include PageTS 
   
   Enable the extension in the Extension Manager and include the **static PageTS** for TYPO3 core icons or set up your own icons. See [Configuration](#markdown-header-configuration).

3. Enable icons for tt_content and/or pages 
   
   In the extension settings (`Admin Tools → Extension Configuration → bw_icons`), you can enable the icon fields. If
   you want to use it for other tables, see [For developers](##markdown-header-for-developers).

## Configuration

The displayed icons are set up via PageTS. Choose a unique identifier and select `FileIconProvider` if you want to add
image files from a directory or `CssIconProvider` if you want to display font icons from a stylesheet.

```
mod.tx_bwicons {

    # Get icons from directory and subdirectory. Subdirectories become sidebar links.
    typo3icons = Blueways\BwIcons\Provider\FileIconProvider
    typo3icons {
        title = TYPO3 Icons
        folder = EXT:core/Resources/Public/Icons/T3Icons/svgs
    }

    # Get icons from stylesheet. Multiple font-faces in one file become sidebar links.
    fontawesome = Blueways\BwIcons\Provider\CssIconProvider
    fontawesome {
        title = FontAwsome
        file = fileadmin/fontawesome/css/all.css
    }
}
```

## Usage

The icons are saved as filename (e.g. `EXT:myext/Resources/Public/Images/icon.svg` or `fileadmin/icons/foo.png`) if you use the `FileIconProvider` or as css class names (e.g. `fas fa-arrow-right`) by using `CssIconProvider`.

If you have configured only the selection of SVGs, you can safely use the `<f:image src="{data.tx_bwicons_icon}" />` viewHelper in your fluid template.

By only using font icons, you can output like `<i class="{data.tx_bwicons_icon}"></i>`.

If you have a mixture, you can use my ViewHelper that determines the type by checking for a dot in the icon name:

```html
{namespace bw=Blueways\BwIcons\ViewHelpers}

<bw:icon icon="{data.tx_bwicons_icon}" /> Hello world!
```

Output:
```
<i class="fa fas-wave"></i> Hello world!
```
or

```
<img src="/fileadmin/icons/foo.svg" /> Hello world!
```

## For developers

### Usage in other tables

1. Create database field for the icon:
   ```sql
   create table tx_myext_domain_model_foo (
       icon_field varchar(255) not null default '',
   );
   ```

2. Edit TCA: Add the renderType `iconSelection` in the config array:
   ```php
   ...
   'icon_field' => [
        'label' => 'My Icon',
        'config' => [
           'type' => 'input',
           'renderType' => 'iconSelection'
        ]
   ],
   ...
   ```

3. Create a property and getter in your (extended) model class for frontend output

### New icon sources

If you want to add other icon sources (e.g. from API), you can create your own IconProvider. Just make sure to extend from `Blueways\BwIcons\Provider\AbstractIconProvider`.

## Contribute

This extension was made by Maik Schneider from [blueways](https://www.blueways.de/). Feel free to contribute!

- [Bitbucket-Repository](https://bitbucket.org/blueways/bw_icons/)
