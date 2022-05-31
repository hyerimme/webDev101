# Week 3

- [Recap]()

## 🔙 Recap
### Terminal and GitHub Exercising
- 8 simple terminal commands
- signing up and tutorial for GitHub
- Googling

## 📖 This Week
- Vim
- GitHub Configuration
- Using GitHub with VsCode
- HTML

## 📓 Vim
<img src="https://miro.medium.com/max/605/1*_BWVJB2JzuuzyxGxm6XWQQ.png" /> <br />
Vim is a free and open-source, screen-based text editor program. Vim is an enhanced version of vi.

Vim is installed on MacOS by default. But Windows should install Vim manually. This will take a huge amount of time.

### **How to use Vim Text Editor?**
- Change to `Insert Mode`:
Press `i` to edit and insert characters.
- Change to `Normal Mode`:
Press `Esc`. Normal mode is the default mode in the Vim Text Editor.
- Change to `Command Line`:
Press `:`, colon. This will allow you to save the changes or exit from the Vim.
- To Save or Exit:
    - Press `w` for saving
    - Press `q` for quiting
    - Press `wq` for saving and quiting
    - Press `q!` for enforce quiting when you made any change and don't want to save it and just exit from the Vim.

For more specific information about Vim Text Editor, refer this [website](https://opensource.com/article/19/3/getting-started-vim).

## 📛 GitHub Configuration

Once you finish installing GitHub and you are trying to push to the remote machine, git gonfiguration will block you from comitting by giving the following error:
```
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author
```
There are two ways that you can resolve this problem.
### **First**,
type
```
git config --global --edit
```
This will lead you to a configuration screen with vim editor like the following example. 
```
  1 [filter "lfs"]
  2         process = git-lfs filter-process
  3         required = true
  4         clean = git-lfs clean -- %f
  5         smudge = git-lfs smudge -- %f
  6 [user]
  7         name = OfficerChul
  8         email = jang128@purdue.edu
  9 [core]
 10         autocrlf = true
 ```
To configure,
1. Press `i` to edit. Go to line 7 and 8 to correct name and email respectively.
2. Press `Esc`.
3. Press `:wq` for saving and get out of the vim.
Try commit and push again.

### **Second**,
Use the following commands to correct username and email of your git in local machine.
```
git config --global user.name "OfficerChul"
git config --global user.email gcj1234567890@gmail.com
```

## 🐱 Using GitHub with VsCode

You can still use GitHub without using terminal `GitHub` commands by using VsCode. <br />
It is very convenient. Once you are accustomed with using VsCode GitHub feature, you are not gonna get out of this.

### **How to use GitHub in VsCode?**
**Step1**<br />
Make any change to push to your remote machine.

**Step2**<br />
Press `source control tab` on your side bar.
<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_3/images/github_vscode_source_control.jpg?raw=true" />


**Step3**<br />

**Step4**<br />


## 🛕 HTML


