# 📖 GitHub - configure username and password

## 💻 Once you sign up for GitHub, you need to set you username and email address to your local machine.

To see if the username and email address for your git in your local machine is correct or not, type
```
git config --global --edit
```
This will show you, the configuration like below
```
[filter "lfs"]
        smudge = git-lfs smudge -- %f
        process = git-lfs filter-process
        required = true
        clean = git-lfs clean -- %f
[user]
        name = Kyochul-Jang
        email = jang128@purdue.edu
[core]
        autocrlf = true
        safecrlf = false
```

If you have a wrong `name` or `email`, you need to write correct username and email address.

### First, change your `vim` to insert mode.
Type `i` to change your `vim` to insert mode. Now, you can type in your `vim`. 

### Second, fix the wrong name or email. 
Go to the line of the code where you have wrong email or name by using arrow keys (up/down). 
Once your cursor arrived the line of the code, fix the name and the email to the right one. 

### Third, get out of the `vim`.
1. Press `esc` 
2. Press `:` followed by `wq`
3. Press `enter` to get out of the `vim`

### Lastly, try to commit again.
```
git commit -m "<message>"
```

### Try this guidance and send me a kakaotalk if there's any issue.

