# Week 3

- [Recap](https://github.com/OfficerChul/webDev101/blob/main/Week_3/Week_3.md#-recap)
- [This Week](https://github.com/OfficerChul/webDev101/blob/main/Week_3/Week_3.md#-this-week)
- [Vim](https://github.com/OfficerChul/webDev101/blob/main/Week_3/Week_3.md#-vim)
- [GitHub Configuration](https://github.com/OfficerChul/webDev101/blob/main/Week_3/Week_3.md#-github-configuration)
- [Using GitHub with VsCode](https://github.com/OfficerChul/webDev101/blob/main/Week_3/Week_3.md#-using-github-with-vscode)
- [HTML](https://github.com/OfficerChul/webDev101/blob/main/Week_3/Week_3.md#-html)


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

> For more specific information about Vim Text Editor, refer this [website](https://opensource.com/article/19/3/getting-started-vim).

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
Press `source control tab` on your side bar. </br>
<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_3/images/github_vscode_sidebar.jpg?raw=true" />

**Step3**<br />
Check the changes you made.<br />
You can also discard all changes. <br />
Press check mark if the changes are all correct and you want to do `git add .` and `git commit` with the message.

<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_3/images/github_vscode_source_control.jpg?raw=true" />

**Step4**<br />
Push to your remote machine by pressing the `sync change button`.<br />

<img src = "https://github.com/OfficerChul/webDev101/blob/main/Week_3/images/github_vscode_push.jpg?raw=true" />
or
<br />
<img src = "https://github.com/OfficerChul/webDev101/blob/main/Week_3/images/github_vscode_push2.jpg?raw=true" />


## 🛕 HTML

HTML stands for Hyper Text Markup Language, which is the most widely used language on Web to develop web pages.
</br>
HTML is being widely used to format web pages with the help of different tags available in HTML language.
<br />
VsCode has a lot of convenient features for web dev.
> For more information, click this [link](https://code.visualstudio.com/docs/languages/html).

### Tags and Elements
Tags in HTML is a piece of word which is surrounded by angle brackets, `<` and `>`.

You need to have both a opening tag and a closing tag to make an element.

ex) 
- opening tag: `<h1>`
- closing tag: `</h1>`
- element: `<h1>hello world!</h1>`

### HTML Example
```
<!DOCTYPE html>
<html>
<head>
<title>HTML Example</title>
</head>
<body>

<h1>This is a Heading</h1>
<h2>Hello World</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
### Make HTML file
Let's make HTML file called `index.html` which is a common name for html file.
</br>
Copy the html example to the file.
<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_3/images/html_example.jpg?raw=true" />

### How to run HTML
1. go to `Extension tab`
2. search `Live Server` and install
<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_3/images/live_server_installation.jpg?raw=true" />
3. click `Go Live` button from the status bar to turn the server on/off.
<img src="https://github.com/OfficerChul/webDev101/blob/main/Week_3/images/live_server_goLive.jpg?raw=true">
> For more information about the Live Server Extension, click [here](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer#:~:text=Open%20a%20HTML%20file%20and,on%20Open%20with%20Live%20Server%20.&text=Open%20the%20Command%20Pallete%20by,Server%20to%20stop%20a%20server.).

### Tags explanation

- `<!DOCTYPE html>`
    - html tags are case insensitive, means `<DOCTYPE>` and `<doctype>` are the same things.
    - This tags informs compiler the file is html file.
- `<html>`
    - all the others tags except for `<!DOCTYPE>` should be wrapped with `<html>` tags.
- `<head>`
    - this tag contains Metadata of the html file.
        - Metadata is data about the html document.   
        - Metadata is not displayed.
    - head tag is the first section of HTML document.
<img src="https://www.tutorialstonight.com/assets/html/html-head-code.png" />

- `<body>`
    - body is the part of HTML that contains the content of the page. The body section is the second section of the HTML document where the first section is head.
<img src="https://www.tutorialstonight.com/assets/html/html-body-code.png">

### [Excercise](https://github.com/OfficerChul/webDev101/blob/main/Week_3/exercise/instruction.md)




