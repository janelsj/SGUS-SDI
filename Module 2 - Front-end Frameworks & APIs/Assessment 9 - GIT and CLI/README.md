# GIT & CLI: Assessment

## Brief

In actual projects, developers may be required to write documentations to assist support engineers or operations engineer in deploying project. In this assessment, you are to write such a documentation that should be clear to the reader on the actionables required to deploy a project (a folder).

You are to write a documentation that contain CLI Commands to:
1. Move [this folder](./Main) from where it is now to the home directory.
1. Delete the folder `folder_c` after moving to the home directory.
1. Rename `Folder A` to `folder-a`.
1. Copy `folder-b` to `folder-a` (to achieve `./Main/folder-a/folder-b`).

Input the CLI Commands here.

## CLI Commands Documentation for Windows Powershell
- #### Section 1: Move main folder to the home directory
    1. Open code editor.
    2. Open new terminal with Ctrl+Shift+`
    3. To get the current location of Main folder in directory,
            type: cd "[insert directory path to the folder name that contains 'Main' folder]"
                  (eg. cd "C:\Users\Documents\GitHub\SGUS-SDI\Module 2\Assessment 9");
            press: enter.
    4. To move Main folder from current directory to home directory,
            type: move [current directory path] [home directory path]
                  (eg. move "C:\Users\Documents\GitHub\SGUS-SDI\Module 2\Assessment 9\Main" "C:\Main");
            press: enter.

- #### Section 2: Delete folder_c after moving to the home directory
    1. To get to the home directory (ie. root folder of the file system, the C:\ drive),
            type: cd\
            press: enter.
    2. Go into the 'Main' folder:
            type: cd Main
            press: enter.
    3. Remove folder_c and all the files it contains:
            type: rmdir folder_c
            press: enter
            type: "Y" (confirmation to agree deletion of folder_c)

- #### Section 3: Rename 'Folder A' to 'folder-a'
    1. Check that you are in C:\Main. Otherwise, repeat steps 1 and 2 of Section 2.
    2. Change name of 'Folder A':
            type: ren "Folder A" "folder-a"
            press: enter.
    

- #### Section 4: Copy 'folder-b' to 'folder-a'
    1. Check that you are in C:\Main. Otherwise, repeat steps 1 and 2 of Section 2.
    2. Copy 'folder-b' into 'folder-a':
        type: copy folder-b folder-a
        press: enter.

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.
