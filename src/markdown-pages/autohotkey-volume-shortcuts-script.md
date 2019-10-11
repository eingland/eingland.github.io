---
path: "/blog/autohotkey-volume-shortcuts-script"
date: "2016-12-30"
title: AutoHotkey Volume Shortcuts Script
tags: ["Development", "AutoHotKey", "Script", "Volume"]

---
I replaced my keyboard a couple of weeks ago to one without media keys and had a need to add them back with a script. For this purpose I decided to finally give AutoHotkey a chance. On the AutoHotkey Script Showcase I saw an existing script for volume shortcuts but it created a redundant on screen volume indicator so I decided it was time to write a simpler version. I use the on screen volume indicator that is built into Windows instead of creating an additional implementation. I also needed to avoid using shortcuts that were already in use so I made them require pressing Ctrl which is in many of the example scripts for AutoHotkey.

## The shortcut keys in the script:

  1. **Ctrl + F10** &#8211; Toggle Volume Mute
  2. **Ctrl + F11** &#8211; Volume Down
  3. **Ctrl + F12** &#8211; Volume Up

## **Volume Shortcuts.ahk**

This script works the same as the Volume Mute, Volume Down and Volume Up keys on a media keyboard.

`gist:eingland/12fa9e55110b981f06c8d0e58eaa8c2b`

## How to Use

To use the script download extract and run with AutoHotkey. Also to make these shortcuts work automatically I put it in the **C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp** folder and let it run on every startup. This path is the all users startup folder on Windows 8 and 10 so if running another platform you may need to look up the appropriate path. Make sure to install AutoHotkey before putting the script into the startup folder.

&nbsp;