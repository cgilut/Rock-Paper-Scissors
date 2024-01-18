First attempt at the rock paper scissors game using only JS.

This repo was created on a local machine, rather than on github and then cloned over. As a result there was a number of errors when a push was attempted
1st error:

    fatal: No configured push destination.
    Either specify the URL from the command-line or configure a remote repository using

        git remote add <name> <url>

    and then push using the remote name

        git push <name>

The fix was to configure a remote repository:
    $ git remote add origin git@github.com:cgilut/theOdinProject_js.git

But when trying to push a 2nd error occurred:

    fatal: The current branch main has no upstream branch.
    To push the current branch and set the remote as upstream, use

        git push --set-upstream origin main

    To have this happen automatically for branches without a tracking
    upstream, see 'push.autoSetupRemote' in 'git help config'.

Using the code from the error
    $ git push --set-upstream origin main
resulted in another error:

    error: src refspec main does not match any
    error: failed to push some refs to 'github.com:cgilut/theOdinProject_js.git'

Eventually another commit was added, and an attempt to
    $ git push -u origin main
Returned a new error:

    ! [rejected]        main -> main (fetch first)
    error: failed to push some refs to 'github.com:cgilut/theOdinProject_js.git'
    hint: Updates were rejected because the remote contains work that you do not
    hint: have locally. This is usually caused by another repository pushing to
    hint: the same ref. If you want to integrate the remote changes, use
    hint: 'git pull' before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.

In the end the code that fixed everything was the following:

    git fetch origin main:tmp
    git rebase tmp
    git push origin HEAD:main
    git branch -D tmp




    qwe