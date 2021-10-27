<?php

defined('TYPO3_MODE') or die();

// Create new field
$temporaryColumns = [
    'tx_bwicons_icon' => [
        'exclude' => 1,
        'label' => 'LLL:EXT:bw_icons/Resources/Private/Language/locallang.xlf:icon',
        'config' => [
            'type' => 'input',
            'renderType' => 'iconSelection'
        ],
    ]
];

// Register new field
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'tt_content',
    $temporaryColumns
);

// Display new field if enabled
$extensionConfiguration = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
    \TYPO3\CMS\Core\Configuration\ExtensionConfiguration::class
);
$bwiconsConf = $extensionConfiguration->get('bw_icons');

if ((int)$bwiconsConf['tt_content'] === 1) {
    $firstBreak = strpos($GLOBALS['TCA']['tt_content']['palettes']['headers']['showitem'], '--linebreak--');
    $secondBreak = strpos($GLOBALS['TCA']['tt_content']['palettes']['headers']['showitem'], '--linebreak--',
        $firstBreak + 13);
    $GLOBALS['TCA']['tt_content']['palettes']['headers']['showitem'] = substr_replace($GLOBALS['TCA']['tt_content']['palettes']['headers']['showitem'],
        'tx_bwicons_icon,',
        $secondBreak, 0);
}
