# Week 2

- [Recap](https://github.com/OfficerChul/webDev101/blob/main/Week_2/Week_2.md#-recap)
- [This Week](https://github.com/OfficerChul/webDev101/blob/main/Week_2/Week_2.md#-this-week)
- [Terminal](https://github.com/OfficerChul/webDev101/blob/main/Week_2/Week_2.md#%EF%B8%8F-terminal)
- [GitHub](https://github.com/OfficerChul/webDev101/blob/main/Week_2/Week_2.md#-github)
- [Exercise for GitHub and Terminal](https://github.com/OfficerChul/webDev101/blob/main/Week_2/Week_2.md#-exercise-for-github-and-terminal)
- [HTML](https://github.com/OfficerChul/webDev101/blob/main/Week_2/Week_2.md#-html)

## 🔙 Recap
### Types of Web Dev
- Frontend - Design, Function
- Backend - Data Management, storing
- FullStack - Bit of both backend and frontend

### Setting Development Environment
- Terminal - electronic communication hardware device without GUI
- VsCode - Editor
- Github - Distributed Source Control System

## 📖 This Week

### Let's drill down further this week!
- **Terminal** - simple command
- **GitHub** - git and GitHub, sign up, install, tutorial
- **Excercise** of GitHub and Terminal
- **HTML**


## 🖥️ Terminal

Terminals, also known as command lines or consoles, allow us to accomplish and automate tasks on a computer without the use of a graphical user interface.

10 useful Terminal Commands
> click [here](https://towardsdatascience.com/17-terminal-commands-every-programmer-should-know-4fc4f4a5e20e) for more info!

```
pwd
```
Print Working Directory (pwd):
prints the full path to the current directory

<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/pwd.jpg?raw=true">

```
ls
```
List (ls): list all the contents of the specified directory
<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/ls.jpg?raw=true">

```
mkdir [direcotory name]
```
Make Directory (mkdir): create a directory
<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/mkdir.jpg?raw=true">

```
cd [destination folder name]
```
Change Directory (cd): change the currently working directory
<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/cd.jpg?raw=true">


```
clear
```
clear: clear the terminal screen

<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/clear1.jpg?raw=true">

<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/clear2.jpg?raw=true">

```
mv [file to move] [destination directory/path]
```
MoVe (mv): move file or directory
<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/mv1.jpg?raw=true">

<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/mv2.jpg?raw=true">

```
rm (-r) [file name / directory name]
```
ReMove (rm): remove file or directory</br>
*to remove directory, `rm -r` command is used.

<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/mv1.jpg?raw=true">

<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/mv2.jpg?raw=true">

```
cat [filename]
```
Concatenate (cat): read the file and print it to the terminal screen

<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/cat.jpg?raw=true">

### If you have any command you want to know, google it!

## 🐱 GitHub

### What is GitHub?

### We need to know **Git** first
**Git** is a version control tool (software) to track the changes in the source code.
Git is installed on Linux and MacOS computers by default, but Windows.

### Then what is GitHub
**GitHub** is a distributed version-control platform where users can collaborate on or adopt open source code projects
>For more information, click [here](https://docs.github.com/en/get-started)!!

### Git vs GitHub

<img src="https://andersenlab.org/dry-guide/2022-03-09/img/git_v_github.png" alt="git&github" />

### Let's set up GitHub

Step 0. Install Git (only Window).
> If you want to check whether `git` is installed on your computer or not, type
```git --version``` on your command line. It will show what git version is installed on your computer. 
```
git version 2.30.0.windows.1
```
>If not installed, it won't show you the git version.

Step 1. Create GitHub account
> You can create your GitHub account [here](https://github.com/join).

Step 2. Clone [WebDev101](https://github.com/OfficerChul/webDev101)
<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/github1.jpg?raw=true" />
```
git clone https://github.com/OfficerChul/webDev101.git
```

Step 3. add, commit, push and pull, and fork

- Add a file to staging environment
```
git add .
```
> `"."` means all subfiles

- Package all files in staging area into a commit
```
git commit -m "<message>"
```
> Put the message for the commit instead of `<message>`

- Push files in commit into git repo so that others now can see your changes.
```
git push
```

- If others made a change on your git repo, you can get the most updated change to your local machine(computer).
```
git pull
```
</br>
</br>
<img src="https://uidaholib.github.io/get-git/images/workflow.png" />

- Creates a completely independent copy of Git repository
<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_2/images/github2.jpg?raw=true" />

**But**, with VsCode GitHub extension, these commands are not needed.


## 🍎 Exercise for GitHub and Terminal

1. Create GitHub account
2. Fork this repo to your GitHub
3. Read the instruction in `Week_2\practice` directory and do the assignment
4. Add, commit and push the result to your repo
> Follow the git commit convention when you commit. Click [here](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53) for the convention

## 🦴 HTML







